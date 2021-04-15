import Component from "../Component.js";

class RigidBodyComponent extends Component {
	constructor(gameObject, args) {
		super(gameObject);
		this.gravity = true;
		if (args)
			this.gravity = args.gravity;
	}
	start() {
		this.heading = 0;
		this.velocity = 0;
	}
	update() {
		let vx = Math.cos(this.heading) * this.velocity;
		let vy = Math.sin(this.heading) * this.velocity;

		vy += 9.8 * 1/60; // gravity constant handled for our framerate

		// update transform
		/**
		 * this.gameObject.transform.position.x += vx * 1/60;
		 * this.gameObject.transform.position.y += vy * 1/60;
		 */

		this.heading = Math.atan2(vy, vx);
		this.velocity = Math.sqrt(vx * vx + vy * vy);
	}
}

export default RigidBodyComponent;
