import Component from "../Component.js"

class WorldCameraComponent extends Component {
	constructor(gameObject, color) {
		super(gameObject);  
		this.screenWidth = 1;
		this.screenHeight =  1;
		this.color = color || "black";  
	}
}

export default WorldCameraComponent;
