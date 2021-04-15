import Component from "../../../engine/Component.js"

class ProjectileSpawnComponent extends Component {
	static name = "ProjectileSpawnComponent";
	constructor(gameObject, prefabName, type = 'key', condition = ' ') {
		super(gameObject);
		if (typeof prefabName !== 'string')
			console.error('Invalid prefabName for ProjectileSpawnComponent!', prefabName);
		else {
			this.prefabName = prefabName;
			this.projectile = {
				prefabName: this.prefabName,
			}
		}
		if (type == 'key') {
			if (typeof condition == 'string')
				this.key = condition;
			else
				console.log('Invalid condition for ProjectileSpawnComponent!');
			this.type = 'key';
		}
		else if (type == 'ticks') {
			this.ticks = 0;
			if (typeof condition == 'number')
				this.ticksMax = condition;
			else
				console.error('Invalid condition for ProjectileSpawnComponent!');
			this.type = 'ticks';
		}
		else
			console.error('Invalid type for ProjectileSpawnComponent!');
	}
	update() {
		if (this.type == 'ticks') {
			this.ticks++;
			if (this.ticks > this.ticksMax) {
				this.ticks = 0;
				Instantiate(this.projectile);
			}
		}
		else if (this.type == 'key') {
			console.log('got in, checking', globalThis.Input.getKey(this.key), 'for \'', this.key, '\'');
			if (globalThis.Input.getKey(this.key)) {
				console.log('instantiating');
				let shipGeometry = this.gameObject.getComponent('RectangleGeometryComponent');
				let proj = Instantiate(this.projectile);
				proj.transform.position.x = this.gameObject.transform.position.x;
				proj.transform.position.y = this.gameObject.transform.position.y;
				proj.transform.position.x += Math.cos(this.gameObject.transform.rotation) * shipGeometry.width / 2;
				proj.transform.position.y += Math.sin(this.gameObject.transform.rotation) * shipGeometry.height / 2;
				console.log(proj.transform, this.gameObject.transform);

				//let rigidBody = proj.getComponent('RigidBodyComponent');
				//rigidBody.heading = this.gameObject.transform.rotation;
				//rigidBody.velocity = 20;
			}
		}
	}
}

export default ProjectileSpawnComponent;