import Component from "../Component.js"
import Matrix from "../geometry/Matrix.js";
import Vector2 from "../geometry/Vector2.js";

class TransformComponent extends Component {
	constructor(gameObject) {
		super(gameObject)
		this.position = new Vector2(0, 0);
		this.scale = new Vector2(1,1);
		this.rotation = 0;

		this.children = [];
		this.parentTransform = null;
	}
	get localMatrix() {
		return Matrix.identity
			.translate(this.position.x, this.position.y)
			.rotate(this.rotation)
			.scale(this.scale.x, this.scale.y)
	}
	get worldMatrix() {
		if (this.parentTransform == null) {
			return this.localMatrix;
		}
		else{
			return this.parentTransform.worldMatrix.multiply(this.localMatrix);
		}
	}
	get localRotation() {
		return this.rotation;
	}
	set localRotation(radians) {
		this.rotation = radians;
		return this;
	}
	get localScale() {
		return this.scale;
	}
	set localScale(scaleVector) {
		this.scale = scaleVector;
		return this;
	}
	get localPosition() {
		return this.position;
	}
	set localPosition(positionVector) {
		this.position = positionVector;
		return this;
	}
	get worldScale() {
		return this.worldMatrix.extractScale();
	}
	get worldRotation() {
		return this.worldMatrix.extractRotation();
	}
	get worldPosition() {
		return this.worldMatrix.extractTranslation();
	}
	get parent() {
		return this.parentTransform;
	}
	set parent(transform) {
		this.parentTransform = transform;
	}
	rotate(radians) {
		this.rotation += radians;
		return this;
	}
	translate(dx, dy) {
		if (!dy && (dx.x == 0 || dx.x) && (dx.y == 0 || dx.y)) {
			this.position.plus(dx);
		}
		this.position.plus(new Vector2(dx,dy));
		return this;
	}
	scaleBy(sx, sy) {
		if (!sy && (sx.x == 0 || sx.x) && (sx.y == 0 || sx.y)) {
			this.scale.x *= sx.x;
			this.scale.y *= sx.y
		}
		this.scale.x *= sx;
		this.scale.y *= sy;
		return this;
	}

	
}

export default TransformComponent;
