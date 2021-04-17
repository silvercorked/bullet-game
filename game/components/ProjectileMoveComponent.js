import Component from "../../../engine/Component.js"

class ProjectileMoveComponent extends Component {
	static name = 'ProjectileMoveComponent';
	constructor(gameObject, speed = 1) {
		super(gameObject);
		if (gameObject == undefined) return;
		this.speed = speed * Engine.spf;
	}
	update() {
		let nextMove = [Math.cos(this.gameObject.transform.rotation) * this.speed, Math.sin(this.gameObject.transform.rotation) * this.speed];
		this.gameObject.transform.position.x += nextMove[0];
		this.gameObject.transform.position.y += nextMove[1];
	}
}

export default ProjectileMoveComponent;