import Component from "../Component.js"
class ScreenTextComponent extends Component {
    constructor(gameObject, string, options) {
        super(gameObject);

        this.string = string;
        
        this.color = options?.color || "red";
        this.font = options?.font || "32pt arial";
        this.alignment = options?.alignment || "left";
        this.justification = options?.justification || "bottom";
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.font = this.font;
        
        //Handle alignment
        let alignment = 0;
        if(this.alignment == "center")
            alignment = -ctx.measureText(this.string).width / 2;
        if(this.alignment == "right")
            alignment = -ctx.measureText(this.string).width;

        let justification = 0;
        if(this.justification == "middle")
            justification = ctx.measureText(this.string).actualBoundingBoxAscent / 2;
        if(this.justification == "top")
            justification = ctx.measureText(this.string).actualBoundingBoxAscent;
        ctx.fillText(this.string, 
            this.gameObject.transform.position.x + alignment,
            this.gameObject.transform.position.y + justification
		);
    }
}

export default ScreenTextComponent;
