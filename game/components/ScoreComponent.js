import Component from '../../../engine/Component.js';

class ScoreComponent extends Component {
	static name = 'ScoreComponent';
	constructor(gameObject) {
		super(gameObject);
		globalThis.score = 0;
	}
	update() {
		let component = Engine.SceneManager.currentScene.getGameObject('ScoreText');
		if (component)
			component.getComponent('ScreenTextComponent').string = "Score: " + globalThis.score;
	}
}

export default ScoreComponent;