class ProjectileBounceComponent extends Engine.Component {
	static name = 'ProjectileBounceComponent';
	constructor(gameObject) {
		super(gameObject);
		this.bounce = 0;
	}
	update() {
		let screenBottom = Engine.SceneManager.screenHeight;
		let screenLeft = Engine.SceneManager.screenWidth;
		let camera = Engine.SceneManager.currentScene.camera;
		let circleTransform = this.gameObject.transform;
		let bottom = (screenBottom / 2) / camera.transform.scale.y;
		let top = -bottom;
		let left = (screenLeft / 2) / camera.transform.scale.x;
		let right = -left;
		let x = circleTransform.position.x;
		let y = circleTransform.position.y;
		if (y > bottom || y < top) {
			circleTransform.rotation = -circleTransform.rotation;
			this.bounce++;
		}
		else if (x > left || x < right) {
			circleTransform.rotation = Math.PI - (circleTransform.rotation);
			this.bounce++;
		}
		//different (incorrect) reflections (goes back to where it came from)
		/*
		if (y > bottom || y < top) {
			circleTransform.rotation += Math.PI;
		}
		if (x > left || x < right) {
			circleTransform.rotation += Math.PI;
		}
		*/
		/*
		let bounced = false;
		if (y > bottom || y < top) {
			circleTransform.rotation = -circleTransform.rotation;
			bounced = true;
		}
		if (x > left || x < right) {
			circleTransform.rotation = Math.PI - (circleTransform.rotation);
			bounced = true;
		}
		if (bounced) {
			let proj = null, speed = ((proj = this.gameObject.getComponent('ProjectileMoveComponent')).speed * (0.7 * Math.random()) + 0.3); // make better random function
			proj.speed = speed;
			console.log(speed, this.gameObject.getComponent('ProjectileMoveComponent').speed);
		}
		*/
		// random reflection algorithm change
		// gravity towards player
		// enemy tracking algorithms
		// faster enemy shots
		// random speed increases after wall bounce
	}
}

export default ProjectileBounceComponent;
