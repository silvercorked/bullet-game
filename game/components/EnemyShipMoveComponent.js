import Component from '../../../engine/Component.js';

class EnemyShipMoveComponent extends Component {
	static name = 'EnemyShipMoveComponent';
	constructor(gameObject, speed = 1) {
		super(gameObject);
		this.speed = speed * Engine.spf;
	}
	update() {
		let pLoc = Engine.SceneManager.currentScene.getGameObject('PlayerShip')?.transform.position;
		if (pLoc) {
			let eLoc = this.gameObject.transform.position;
			this.gameObject.transform.rotation = eLoc.angleTo(pLoc);
			let nextMove = [Math.cos(this.gameObject.transform.rotation) * this.speed, Math.sin(this.gameObject.transform.rotation) * this.speed];
			this.gameObject.transform.position.x += nextMove[0];
			this.gameObject.transform.position.y += nextMove[1];
		}
	}
}

export default EnemyShipMoveComponent;