import Component from "../../../engine/Component.js"

class ProjectileSpawnComponent extends Component {
	static name = 'ProjectileSpawnComponent';
	constructor(gameObject, prefabName, type = 'key', condition = ' ', spawnrate = 60) {
		super(gameObject);
		if (gameObject == undefined) return; // allow creation without game object for instantiation
		this.count = 0;
		if (typeof prefabName !== 'string')
			console.error('Invalid prefabName for ProjectileSpawnComponent!', prefabName);
		else {
			this.prefabName = prefabName;
			this.projectile = {
				prefabName: this.prefabName,
			}
		}
		if (type == 'key' || type == 'mouse') {
			if (typeof condition == 'string' || typeof condition == 'number')
				this.key = condition;
			else
				console.log('Invalid condition for ProjectileSpawnComponent!');
			this.type = type;
			this.spawnrate = spawnrate;
			this.ticks = 0;
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
		else if (this.type == 'key' || this.type == 'mouse') {
			this.ticks++;
			if (this.ticks >= this.spawnrate && (this.type == 'key' ? globalThis.Input.getKey(this.key) : Input.getMouseButton(this.key))) {
				this.ticks = 0;
				//console.log('instantiating');
				this.count++;
				let shipGeometry = this.gameObject.getComponent('RectangleGeometryComponent');
				let proj = Instantiate(this.projectile);
				proj.transform.position = this.gameObject.transform.position.clone();
				proj.transform.position.x += Math.cos(this.gameObject.transform.rotation) * (shipGeometry.width / 2);
				proj.transform.position.y += Math.sin(this.gameObject.transform.rotation) * (shipGeometry.height / 2);
				proj.transform.rotation = this.gameObject.transform.rotation;
				//console.log(proj.transform, this.gameObject.transform);
				let count = Engine.SceneManager.currentScene.getChildren().filter(item => item.name == 'PlayerProjectile').length;
				console.log('in scene: ', count, '\ncreated: ', this.count);
				//let rigidBody = proj.getComponent('RigidBodyComponent');
				//rigidBody.heading = this.gameObject.transform.rotation;
				//rigidBody.velocity = 20;
			}
		}
	}
}

export default ProjectileSpawnComponent;