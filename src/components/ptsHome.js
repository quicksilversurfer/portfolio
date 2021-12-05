import React from "react";

import { CanvasSpace, Pt, Group } from "pts";

export default class PtsHome extends React.Component {
  constructor(props) {
    super(props);
    this.canvRef = React.createRef();
    this.space = null;
    this.form = null;
    this.chain = new Group();
    this.stretch = false;
  }

  componentDidMount() {
    this.init();
    this.space.play();
  }

  
  // Required: Override this to use Pts' player `animate` callback
  // See guide: https://ptsjs.org/guide/space-0500

  animate(time, ftime) {
      // shorten the line when it's not stretching
      if (this.chain.length > ((this.stretch) ? 100 : 200)) this.chain.shift();

      this.form.strokeOnly("#464646", 4).line( this.chain );
      this.form.fillOnly("#464646").point( this.space.pointer, 2, "circle")
  }
  action(type, px, py) {
          // this.stretch the line when mouse is down
          if (type === "up") this.stretch = true;
          if (type === "up") this.stretch = false; 
    
          // add a point to the line when mouse moves
          if (type === "move") this.chain.push( new Pt(px, py) ); 
  }

  init() {
    const { bgcolor, resize, retina } = this.props;

    this.space = new CanvasSpace(this.canvRef).setup({
      bgcolor,
      resize,
      retina
    });
    this.form = this.space.getForm();

    // var pts = new Group();

    this.space.add(this);
    this.space.bindMouse().bindTouch();

  }

  render() {
    return (
      <div className={this.props.name || "canvas"}>
        <canvas ref={c => (this.canvRef = c)} />
      </div>
    );
  }
}

PtsHome.defaultProps = {
  name: "pt", // maps to className of the container div
  bgcolor: "",
  resize: true,
  retina: true,
  loop: true,
};