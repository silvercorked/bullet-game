import Component from "../../../engine/Component.js"

class PlayerShipMoveComponent extends Component {
	static name = "PlayerShipMoveComponent";
	constructor(gameObject, speed = 1) {
		super(gameObject);
		this.speed = speed;
	}
	update() {
		let inp = globalThis.Input;
		let up = inp.getKey('w');
		let left = inp.getKey('a');
		let right = inp.getKey('d');
		let down = inp.getKey('s');
		if (up && left) {
			this.gameObject.transform.position.x -= this.speed;
			this.gameObject.transform.position.y -= this.speed;
		}
		else if (left && down) {
			this.gameObject.transform.position.x -= this.speed;
			this.gameObject.transform.position.y += this.speed;
		}
		else if (down && right) {
			this.gameObject.transform.position.x += this.speed;
			this.gameObject.transform.position.y += this.speed;
		}
		else if (right && up) {
			this.gameObject.transform.position.x += this.speed;
			this.gameObject.transform.position.y -= this.speed;
		}
		else if (left)
			this.gameObject.transform.position.x -= this.speed;
		else if (up)
			this.gameObject.transform.position.y -= this.speed;
		else if (right)
			this.gameObject.transform.position.x += this.speed;
		else if (down)
			this.gameObject.transform.position.y += this.speed;
	}
}

export default PlayerShipMoveComponent;