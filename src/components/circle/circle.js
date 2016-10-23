import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Circle extends React.Component {
  constructor() {
    super();

    this.hit = this.hit.bind(this);
  }

  hit() {
    this.props.hit(this.props.id);
  }

  renderCircles() {
    return (
      <g onClick={this.hit} className="hit-group">
        <circle r="150" cx={this.props.x} cy={this.props.y} className="circle-timer">
          <animate
            attributeName="r"
            from="150"
            to="40"
            dur="1s"
            begin="DOMNodeInsertedIntoDocument"
            fill="freeze" />
        </circle>
        <circle r="40" cx={this.props.x} cy={this.props.y} className="circle"/>
        <text textAnchor="middle" x={this.props.x} y={this.props.y + 10} className="circle-text">{this.props.id}</text>
      </g>
    );
  }


  render() {
    return this.renderCircles();
  }
}

export default connect(null, actions)(Circle);
