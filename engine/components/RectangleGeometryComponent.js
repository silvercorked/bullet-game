import Component from '../Component.js';
import Rectangle from '../geometry/Rectangle.js';

class RectangleGeometryComponent extends Component {
	constructor(gameObject, width, height) {
		super(gameObject);
		this.width = width;
		this.height = height;
	}
	asGeometry() {
		return new Rectangle(this.gameObject.transform.position.x, this.gameObject.transform.position.y, this.width, this.height);
	}
}

export default RectangleGeometryComponent;
