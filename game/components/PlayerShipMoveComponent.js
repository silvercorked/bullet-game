import Component from "../../../engine/Component.js"

class PlayerShipMoveComponent extends Component {
	static name = "PlayerShipMoveComponent";
	constructor(gameObject, speed = 1) {
		super(gameObject);
		this.speed = speed * Engine.spf;
	}
	update() {
		let inp = globalThis.Input;
		let up = inp.getKey('w');
		let left = inp.getKey('a');
		let right = inp.getKey('d');
		let down = inp.getKey('s');
		let camera = Engine.SceneManager.currentScene.camera;
		let shipTransform = this.gameObject.transform.position;
		let bottomBorder = (Engine.SceneManager.screenHeight / 2) / camera.transform.scale.y;
		let topBorder = -bottomBorder;
		let leftBorder = (Engine.SceneManager.screenWidth / 2) / camera.transform.scale.x;
		let rightBorder = -leftBorder;
		if (up && left) {
			shipTransform.x -= this.speed;
			shipTransform.y -= this.speed;
		}
		else if (left && down) {
			shipTransform.x -= this.speed;
			shipTransform.y += this.speed;
		}
		else if (down && right) {
			shipTransform.x += this.speed;
			shipTransform.y += this.speed;
		}
		else if (right && up) {
			shipTransform.x += this.speed;
			shipTransform.y -= this.speed;
		}
		else if (left)
			shipTransform.x -= this.speed;
		else if (up)
			shipTransform.y -= this.speed;
		else if (right)
			shipTransform.x += this.speed;
		else if (down)
			shipTransform.y += this.speed;
		if (shipTransform.y > bottomBorder)
			shipTransform.y = bottomBorder;
		else if (shipTransform.y < topBorder)
			shipTransform.y = topBorder;
		if (shipTransform.x > leftBorder)
			shipTransform.x = leftBorder;
		else if (shipTransform.x < rightBorder)
			shipTransform.x = rightBorder;
	}
}

export default PlayerShipMoveComponent;