class LevelComponent extends Engine.Component {
	static name = 'LevelComponent';
	constructor(gameObject) {
		super(gameObject);
		this.start = () => {
			console.log('set globalThis.score to 0', globalThis.score)
		}
	}
	update() {
		let scene = Engine.SceneManager.currentScene;
		let projectiles = scene.getGameObjects('PlayerProjectile'), enemyProjs = scene.getGameObjects('EnemyProjectile');
		let playerShip = scene.getGameObject('PlayerShip');
		let enemyShips = scene.getGameObjects('EnemyShip');
		if (!playerShip || enemyShips.length == 0) { // playership was null (ie destroyed)
			globalThis.gameState = playerShip ? true : false; // true = win, false = lose
			Engine.SceneManager.changeScene('EndScene');
		}
		let proj1;
		for (let i = 0; i < enemyShips.length; i++) { // see if playerProj hit enemyShip
			let enemyShip = enemyShips[i];
			for (let j = 0; j < projectiles.length; j++) {
				if (
					Engine.inCollision(
						(proj1 = projectiles[j]).getComponent('CircleGeometryComponent').asGeometry(),
						enemyShip.getComponent('RectangleGeometryComponent').asGeometry()
					)
				) {
					//console.log('enemyShip hit!', proj1);
					Destroy(proj1);
					Destroy(enemyShip);
					globalThis.score += proj1.getComponent('ProjectileBounceComponent').bounce * 10 + 100; // 100 for ship, +10 per bounce
				}
			}
		}
		if (enemyProjs.length != 0) projectiles.push(...enemyProjs);
		for (let i = 0; i < projectiles.length; i++) { // see if playership is hit
			if ((proj1 = projectiles[i]).name == 'PlayerProjectile' && proj1.getComponent('ProjectileBounceComponent').bounce == 0)
				continue;
			else if (Engine.inCollision(
				playerShip.getComponent('RectangleGeometryComponent').asGeometry(),
				proj1.getComponent('CircleGeometryComponent').asGeometry()
			)) {
				//console.log('PlayerShip Hit!', proj1);
				Destroy(proj1);
				playerShip.getComponent('LivesComponent').lives--;
			}
		}
		let proj2;
		for (let i = 0; i < projectiles.length; i++) { // see if projectiles are hitting eachother
			for (let j = 0; j < projectiles.length; j++) {
				if (j == i)
					continue;
				if (
					Engine.inCollision(
						(proj1 = projectiles[i])
							.getComponent('CircleGeometryComponent').asGeometry(),
						(proj2 = projectiles[j])
							.getComponent('CircleGeometryComponent').asGeometry()
					)
				) {
					//console.log('collision!', proj1, proj2);
					Destroy(proj1);
					Destroy(proj2);
					console.log(proj1, proj2, proj1.getComponent('ProjectileBounceComponent').bounce, proj2.getComponent('ProjectileBounceComponent').bounce)
					globalThis.score += (proj1.getComponent('ProjectileBounceComponent').bounce + proj2.getComponent('ProjectileBounceComponent').bounce) * 5 + 5; // +5 per bounce
				}
			}
		}
	}
}

export default LevelComponent;
