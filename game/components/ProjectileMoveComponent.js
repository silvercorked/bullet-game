import Component from "../../../engine/Component.js"

class ProjectileMoveComponent extends Component {
	static name = "ProjectileMoveComponent";
	constructor(gameObject, speed = 1, angle = 0) {
		super(gameObject);
		this.speed = speed;
        this.angle = angle;
	}
	update() {
		let nextMove = [Math.cos(this.angle) * this.speed, Math.sin(this.angle) * this.speed];
		gameObject.transform.x += nextMove[0];
		gameObject.transform.y += nextMove[1];
	}
}

export default ProjectileMoveComponent;