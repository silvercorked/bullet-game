import GameObject from "./GameObject.js"
import SceneManager from "./SceneManager.js"

export default class Scene {
	children = [];

	static deserializeObject(objectDefinition, sceneStart = true) {
		let gameObject;
		let gameObjectDefinition;
		if (objectDefinition.prefabName) //It's a prefab
			gameObjectDefinition = SceneManager.allPrefabs.find(i => i.name == objectDefinition.prefabName);
		else //It's a one-off game object 
			gameObjectDefinition = objectDefinition.gameObject;

		if (!gameObjectDefinition)
			throw "Could not find a prefab or game object description (deserializeObject) in " + JSON.stringify(objectDefinition, null, 2)
		gameObject = GameObject.deserialize(gameObjectDefinition); //Deserialize the object
		gameObject.transform.position.x = objectDefinition.x || 0; //Set the x or default to 0. This is already the default, so this is redundant but very clear
		gameObject.transform.position.y = objectDefinition.y || 0; //Set the y or default to 0
		gameObject.transform.scale.x = objectDefinition.sx || 1; //Set the x or default to 0. This is already the default, so this is redundant but very clear
		gameObject.transform.scale.y = objectDefinition.sy || 1; //Set the y or default to 0
		gameObject.transform.rotation = objectDefinition.r || 0; //Set the y or default to 0
		if (!sceneStart) {
			gameObject.callMethod("start");
		}
		return gameObject
	}

	static deserialize(sceneDefinition) {
		let toReturn = new Scene(); //Create a new Scene
		toReturn.name = sceneDefinition.name; //Set the scene's name (for reference later when we are changing scenes)
		if (sceneDefinition.children)
			for (let objectDefinition of sceneDefinition.children) { //Loop over all the children.
				let gameObject = this.deserializeObject(objectDefinition)
				toReturn.addChild(gameObject);
			}
		return toReturn;
	}

	/**
	 * Return a reference to the children in this scene
	 * @return {Array} the array of child GameObjects
	 */
	getChildren() {
		return this.children;
	}

	/**
	 * 
	 * @param {GameObject} child the GameObject child to add to the scene
	 */
	addChild(child) {
		this.children.push(child)
		//child.callMethod("start", []);
	}

	/**
		 * 
		 * @param {2D Rendering Context from a Canvas} ctx the 2D context to which we draw
		 */
	draw(layers) {
		//Clear the screen
		layers.forEach(l => l.ctx.clearRect(0, 0, l.ctx.canvas.width, l.ctx.canvas.height));
		bctx.clearRect(0, 0, bctx.canvas.width, bctx.canvas.height);
		bbctx.clearRect(0, 0, bbctx.canvas.width, bbctx.canvas.height);
		let dctx = layers.find(i => i.name == "default").ctx

		dctx.fillStyle = this.camera.getComponent("WorldCameraComponent").color;
		dctx.fillRect(0, 0, dctx.canvas.width, dctx.canvas.height);
		dctx.save();

		//Loop through all the game objects and render them.
		for (let layer of layers) {
			if (layer.name == 'screen') continue;
			let ctx = layer.ctx;
			ctx.save();
			ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
			ctx.translate(this.camera.transform.position.x, this.camera.transform.position.y)
			ctx.scale(this.camera.transform.scale.x, this.camera.transform.scale.y)
			ctx.rotate(this.camera.transform.rotation);
		}
		for (let i = 0; i < this.children.length; i++) {
			let child = this.children[i];
			if (child.name == "ScreenCamera") continue;
			child.draw(layers);
		}
		for (let layer of layers) {
			let ctx = layer.ctx;
			ctx.restore();
		}
		dctx.restore();

		//Now draw the screen camera
		dctx.save();
		this.screenCamera.draw(layers)
		dctx.restore();
	}
	//Getter does 2 things. 1) I call camera not getCamera().
	//2) Since there is no setter, this variable is read-only
	get camera() {
		return this.getGameObject("MainCamera");
	}
	get screenCamera() {
		return this.getGameObject("ScreenCamera")
	}

	/**
	 * Update all the Gamebjects
	 */
	update() {
		//Use an extended for loop to call update on all gameObjects
		for (let child of this.children) {
			child.update();
		}
	}

	/**
	 * Remove any game objects marked to be destroyed
	 */
	cullDestroyed() {
		let newChildren = [];
		for (let child of this.children) {
			if (!child.markedDestroy)
				newChildren.push(child);
		}
		this.children = newChildren;
	}

	/**
	 * Get a game object by name
	 */
	getGameObject(name) {
		for (let child of this.children) {
			if (child.name == name)
				return child;
			let foundChild = child.getGameObject(name);
			if (foundChild)
				return foundChild;
		}
		//console.error("Couldn't find game component " + name)
	}

	getGameObjects(name) {
		let gameObjects = [];
		for (let child of this.children) {
			if (child.name == name) gameObjects.push(child);
			let childGameObjects = []; child.getGameObjects(name);
			if (childGameObjects.length != 0) gameObjects.push(...childGameObjects);
		}
		return gameObjects;
	}

	/**
	 * Create a new game object based on the prefab name
	 */
	instantiate(objectDescription) {
		let newObject = Scene.deserializeObject(objectDescription, false);
		this.addChild(newObject)
		return newObject;

	}

	/**
	* Call method on all children and their children
	*/
	callMethod(name, args) {
		for (let child of this.children) {
			child.callMethod(name, args);
		}
	}
}