class ChangeSceneComponent extends globalThis.Engine.Component {
	static name = "ChangeSceneComponent";
	ticks;
	ticksMax;
	key;
	type;
	scene;
	constructor(gameObject, scene, type = 'ticks', condition = 100) {
		super(gameObject);
		if (gameObject == undefined) // used in finding objects
			return;
		if (typeof scene !== 'string')
			console.error('Invalid scene name for ChangeSceneComponent');
		else
			this.scene = scene;
		if (type == 'ticks') {
			this.ticks = 0;
			if (typeof condition == 'number')
				this.ticksMax = condition;
			else
				console.error('Invalid condition for ChangeSceneComponent');
			this.type = 'ticks';
		}
		else if (type == 'key') {
			if (typeof condition == 'string')
				this.key = condition;
			else
				console.error('Invalid condition for ChangeSceneComponent');
			this.type = 'key';
		}
        else if (type == 'wait') {
            this.update = () => {}; // do nothing and skip 2 checks from update function defined below;
        }
		else {
			console.error('Invalid type for ChangeSceneComponent');
		}
	}
	update() {
		if (this.type == 'ticks') {
			this.ticks++;
			if (this.ticks > this.ticksMax)
				globalThis.Engine.SceneManager.changeScene(this.scene);
		}
		else if (this.type == 'key') {
			if (globalThis.Input.getKeyDown(this.key))
				globalThis.Engine.SceneManager.changeScene(this.scene);
		}
	}
}

export default ChangeSceneComponent;
