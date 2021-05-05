class EndComponent extends Engine.Component {
	static name = 'EndComponent';
	constructor(gameObject, win = 'You Won!', loss = 'Game Over!') {
		super(gameObject);
		this.win = win;
		this.loss = loss;
		this.enabled = true;
		this.start = () => {
			let stateComponent = Engine.SceneManager.currentScene.getGameObject('EndTextObject').getComponent('ScreenTextComponent');
			let scoreComponent = Engine.SceneManager.currentScene.getGameObject('ScoreTextObject').getComponent('ScreenTextComponent');
			scoreComponent.string += globalThis.score;
			stateComponent.string = globalThis.gameState ? this.win : this.loss;
			//console.log('ran this');
		}
	}
}

export default EndComponent;
