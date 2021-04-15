import Component from "../../../engine/Component.js"

class PlayerShipRotateComponent extends Component {
	static name = "PlayerShipRotateComponent";
	constructor(gameObject) {
		super(gameObject);
	}
	update() {
		let ship = this.gameObject;
		let shipLoc = new globalThis.Engine.Vector2(ship.transform.position.x, ship.transform.position.y);
		let cursorPos = globalThis.Input.getMousePosition();
		ship.transform.rotation = shipLoc.angleTo(cursorPos);
	}
}

export default PlayerShipRotateComponent;