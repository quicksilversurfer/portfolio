import React from "react";

import { CanvasSpace, Create, Curve, Polygon } from "pts";

export default class PtsVaccellent extends React.Component {
  constructor(props) {
    super(props);
    this.canvRef = React.createRef();
    this.space = null;
    this.form = null;
  }

  componentDidMount() {
    this.init();
    this.space.play();
  }

  
  // Required: Override this to use Pts' player `animate` callback
  // See guide: https://ptsjs.org/guide/space-0500

  start(bound) {
    this.pts = Create.distributeRandom(this.space.innerBound, 420);
  }
  animate(time, ftime) {
    let t = this.space.pointer;
    this.pts.sort( (a,b) => a.$subtract(t).magnitudeSq() - b.$subtract(t).magnitudeSq() );
    
    let ten = this.pts.slice(0, 12);
    let curve = Polygon.convexHull( ten );
    curve.insert( curve.slice(0, 4), curve.length );
    

    this.form.fillOnly("#333").points( this.pts, 1, "circle" );
    this.form.stroke("#333").polygon( Curve.bspline( curve ) );
    
    let pp = ten.map( (p) => [this.space.pointer, p] );
    this.form.strokeOnly("#f05", 1).lines( pp );
  }

  init() {
    const { bgcolor, resize, retina } = this.props;

    this.space = new CanvasSpace(this.canvRef).setup({
      bgcolor,
      resize,
      retina
    });
    this.form = this.space.getForm();
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

PtsVaccellent.defaultProps = {
  name: "pt", // maps to className of the container div
  bgcolor: "",
  resize: true,
  retina: true,
  loop: true,
};