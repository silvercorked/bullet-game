class ProjectileBounceComponent extends Engine.Component {
	static name = 'ProjectileBounceComponent';
	constructor(gameObject) {
		super(gameObject);
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
		}
		if (x > left || x < right) {
			circleTransform.rotation = Math.PI - (circleTransform.rotation);
		}
		// random reflection algorithm change
		// gravity towards player
		// enemy tracking algorithms
		// faster enemy shots
		// random speed increases after wall bounce
	}
}

export default ProjectileBounceComponent;
