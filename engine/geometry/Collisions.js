import Vector2 from './Vector2.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Line from './Line.js';
import Polygon from './Polygon.js';

export default class {
	static inCollision(one, two) {
		if (one instanceof Vector2) {
			if (two instanceof Vector2) {
				return false;
				}
				if (two instanceof Circle) {
					let distance = one.distanceTo(new Vector2(two.x, two.y));
					if (distance < two.radius)
						return true;
					return false;
				}
				if (two instanceof Rectangle) {
				return one.x >= two.x && one.y >= two.y && one.x <= two.x + two.width && one.y <= two.y + two.height;
			}
		}
		if (one instanceof Circle) {
			if (two instanceof Vector2) {
				return this.inCollision(two, one);
			}
			if (two instanceof Circle) {
				let sumRadii = one.radius + two.radius
				return new Vector2(one.x, one.y).distanceTo(new Vector2(two.x, two.y)) < sumRadii;
			}
			if (two instanceof Rectangle) {
				let objects = [];
				objects.push(new Circle(two.x, two.y, one.radius))
				objects.push(new Circle(two.x + two.width, two.y, one.radius))
				objects.push(new Circle(two.x+ two.width, two.y + two.height, one.radius))
				objects.push(new Circle(two.x, two.y + two.height, one.radius))
				objects.push(new Rectangle(two.x - one.radius, two.y, two.width + one.radius * 2, two.height))
				objects.push(new Rectangle(two.x , two.y - one.radius, two.width , two.height + one.radius * 2))

				for (let object of objects) {
					if (this.inCollision(new Vector2(one.x, one.y), object)) {
						return true;
					}
				}
				return false;
			}
		}
		if (one instanceof Rectangle) {
			if (two instanceof Vector2 || two instanceof Circle) {
				return this.inCollision(two, one);
			}
			if (two instanceof Rectangle) {
				let halfWidth = one.width / 2, halfWidth2 = two.height / 2;
				let halfHeight = one.height / 2, halfHeight2 = two.height / 2;
				let left = one.x - halfWidth, left2 = two.x - halfWidth2;
				let right = one.x + halfWidth, right2 = two.x + halfWidth2;
				let bottom = one.y - halfHeight, bottom2 = two.y - halfHeight2;
				let top = one.y + halfHeight, top2 = two.y + halfHeight2;
				if (bottom2 > top
					|| top2 < bottom
					|| left2 > right
					|| right2 < left)
					return false;
				return true;
			}
		}
		return false;
	}
}
