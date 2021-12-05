import React from "react";

import { CanvasSpace, Line, Group, Geom, Num, Pt, Const } from "pts";

export default class PtsUltrasound extends React.Component {
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
  animate(time, ftime) {
    // create a line and get 200 interpolated points
    let offset = this.space.size.$multiply(0.2).y;
    let line = new Group( new Pt( 0, offset ), new Pt( this.space.size.x, this.space.size.y-offset ) );
    let pts = Line.subpoints( line, 200 );

    // get perpendicular unit vectors from each points on the line
    let pps = pts.map( (p) => Geom.perpendicular( p.$subtract( line[0] ).unit() ).add(p) );

    let angle = this.space.pointer.x/this.space.size.x * Const.two_pi * 2;

    // draw each perpendicular like a sine-wave
    pps.forEach( (pp, i) => {
      let t = i/200 * Const.two_pi + angle + Num.cycle(time%10000/10000);

      if (i%2===0) {
        pp[0].to( Geom.interpolate( pts[i], pp[0], Math.sin( t )*offset*2 ) );
        pp[1].to( pts[i] );
        this.form.stroke("#0c6", 1).line(pp);
      } else {
        pp[0].to( pts[i] );
        pp[1].to( Geom.interpolate( pts[i], pp[1], Math.cos( t )*offset*2 ) );
        this.form.stroke("#f03", 1).line(pp);
      }
      
    });
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

PtsUltrasound.defaultProps = {
  name: "pt", // maps to className of the container div
  bgcolor: "",
  resize: true,
  retina: true,
  loop: true, 
};