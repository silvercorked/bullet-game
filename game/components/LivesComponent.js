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
			console.log('ran out of life!');
			Destroy(this.gameObject);
		}
	}
}

export default LivesComponent;