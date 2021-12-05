import React from "react";

import { CanvasSpace, Pt, World, Polygon, Particle, Body } from "pts";

export default class ptsShui extends React.Component {
  constructor(props) {
    super(props);
    this.canvRef = React.createRef();
    this.space = null;
    this.form = null;
  }

  componentDidMount() {
    this.init();
    this.space.play();
    // var world;
  }

  
  // Required: Override this to use Pts' player `animate` callback
  // See guide: https://ptsjs.org/guide/space-0500

  start(bound, space) {
    this.world = new World( this.space.innerBound, 0.99, new Pt(0, 500) );

    let unit = (this.space.size.x+this.space.size.y) / 150;
    
    // Create bodies and particles
    let hexagon = Body.fromGroup( Polygon.fromCenter( this.space.center.add(100, -100), unit*10, 6 ), 0.5 );
    let square = Body.fromGroup( Polygon.fromCenter( this.space.center.subtract(100,50), unit*8, 4 ), 1 );
    let triangle = Body.fromGroup( Polygon.fromCenter( this.space.center, unit*6, 3 ) );
    let p1 = new Particle( new Pt( this.space.center.x, 100 ) ).size( unit*4 );
    let p2 = new Particle( new Pt( this.space.center.x, 100 ) ).size( unit*2 );

    // add to world
    this.world.add( hexagon ).add( square, "square" ).add( triangle, "triangle" );
    this.world.add( p1 ).add( p2 );

    // hit them with impulse
    p1.hit( 100, -20 );
    p2.hit( 100, -50 );
    hexagon[0].hit( 120, -40 );
    square[0].hit( -100, -20 );

    // lock triangle's first vertice so we can control it by pointer
    square[0].lock = true;
  }
  animate(time, ftime) {
    this.world.drawParticles( (p, i) => this.form.fillOnly(["#9b5de5","#4d908e","#bb3e03", "#005f73"][i%4]).point( p, p.radius, "circle" ) );

    this.world.drawBodies( (b, i) => { 
      this.form.fillOnly(["#f6bd60","#f3722c","#457b9d", "#6b705c"][i%3]).polygon( b ); 
      // this.form.strokeOnly("rgba(0,0,0,0.1");
      b.linksToLines().forEach( (l) => this.form.line(l) ); // visualize the edge constraints
    });
    
    this.world.update( ftime );
    
  }

  action( type, px, py) {
    this.world.body("square")[0].position = new Pt(px, py);
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

ptsShui.defaultProps = {
  name: "pt", // maps to className of the container div
  bgcolor: "",
  resize: true,
  retina: true,
  loop: true,
};