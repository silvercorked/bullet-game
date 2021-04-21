import Vector2 from './Vector2.js';

class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	get corners() {
		return [
			new Vector2(-this.width / 2, -this.height / 2),
			new Vector2(-this.width / 2, this.height / 2),
			new Vector2(this.width / 2, this.height / 2),
			new Vector2(this.width / 2, -this.height / 2)
		];
	}
}

export default Rectangle;
