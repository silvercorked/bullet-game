class ProjectileDestructionComponent extends Engine.Component {
	static name = 'ProjectileDestructionComponent';
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
		if (circleTransform.position.y > bottom || circleTransform.position.y < top
			|| circleTransform.position.x > left || circleTransform.position.x < right) {
			console.log('destroying circle!')
			Destroy(this.gameObject);
		}
	}
}

export default ProjectileDestructionComponent;
