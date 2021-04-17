import Component from "../../../engine/Component.js"

class PlayerShipRotateComponent extends Component {
	static name = "PlayerShipRotateComponent";
	constructor(gameObject) {
		super(gameObject);
	}
	update() {
		let ship = this.gameObject;
		let camera = Engine.SceneManager.currentScene.camera;
		let shipLoc = new globalThis.Engine.Vector2(ship.transform.position.x, ship.transform.position.y);
		let cursorPos = globalThis.Input.getMousePosition();
		cursorPos.x = cursorPos.x / camera.transform.scale.x;
		cursorPos.y = cursorPos.y / camera.transform.scale.y;
		ship.transform.rotation = shipLoc.angleTo(cursorPos);
		//console.log(shipLoc, cursorPos, ship.transform.rotation);
	}
}

export default PlayerShipRotateComponent;