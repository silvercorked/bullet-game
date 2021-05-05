import Component from '../../../engine/Component.js';

class LivesComponent extends Component {
	static name = 'LivesComponent';
	constructor(gameObject, lives = 3) {
		super(gameObject);
		this.hp = lives;
	}
	get lives() {
		return this.hp;
	}
	set lives(newLives) {
		this.hp = newLives;
		if (this.hp <= 0) {
			//console.log('ran out of life!');
			Destroy(this.gameObject);
		}
	}
	update() {
		let hp = '';
		for (let i = 0; i < this.hp; i++)
			hp += '♥';
		let component = Engine.SceneManager.currentScene.getGameObject('LivesText');
		if (component)
			component.getComponent('ScreenTextComponent').string = 'Lives: ' + hp;
	}
}

export default LivesComponent;