class RotateTurretComponent extends Engine.Component {
    constructor(gameObject) {
        super(gameObject);
    }
    start() {
        this.turretSpeed = 1;
    }
    update() {
        let transform = this.gameObject.transform;
        if (globalThis.Input.getKey('ArrowLeft')) {
            transform.rotation -= this.turretSpeed * 1/60;
        }
        else if (globalThis.Input.getKey('ArrowRight')) {
            transform.rotation += this.turretSpeed * 1/60;
        }
        if (transform.rotation > 0) {
            transform.rotation = 0;
        }
        else if (transform.rotation < -(Math.PI / 2));
    
        let circle = Instantiate( {
            prefabName: 'PlayerProjectile'
        });
        circle.name = 'turret circle';
    }
}

export default RotateTurretComponent;
