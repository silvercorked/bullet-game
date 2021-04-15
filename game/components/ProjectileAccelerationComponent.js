class ProjectileAccelerationComponent extends Engine.Component {
    constructor(gameObject) {
        super(gameObject);
    }
    start() {

    }
    update() {
        let circle = Engine.SceneManager.currentScene.getGameObject('PlayerProjectile');
        if (!circle) return;
        let circleTransform = circle.transform;
        let screenBottom = Engine.SceneManager.currentScene.screenHeight;
        let camera = Engine.SceneManager.currentScene.camera;
        if (circleTransform.position.y > (screenBottom / 2) / camera.transform.scale.y) {
            globalThis.Destroy(circle);
            Instantiate({
                prefabName: 'PlayerProjectile'
            })
        }
        let turretCircle = Engine.SceneManager.currentScene.getGameObject('turretCircle');
        if (!turretCircle) return;
        if (turretCircle.transform.position.y > (screenBottom / 2) / camera.transform.scale.y) {
            Destroy(turretCircle);
        }
    }
}

export default ProjectileAccelerationComponent;
