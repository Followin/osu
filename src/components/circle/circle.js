import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Circle extends React.Component {
  constructor() {
    super();

    this.hit = this.hit.bind(this);
  }

  hit() {
    this.props.hit({ 
      id: this.props.id,
      deviation: new Date(this.props.startTime.getTime() + this.props.time).diff(new Date()).milliseconds
    });
  }

  renderCircles() {
    return (
      <g className="hit-group">
        <circle r="150" cx={this.props.x} cy={this.props.y} className="circle-timer">
          <animate
            attributeName="r"
            from="150"
            to="40"
            dur={`${this.props.delay}ms`}
            begin="DOMNodeInsertedIntoDocument"
            fill="freeze"
            id={`circle-timer-animation-${this.props.id}`}/>
        </circle>
        <g onClick={this.hit} >
          <circle r="40" cx={this.props.x} cy={this.props.y} className="circle"> 
            <animate
              attributeName="stroke"
              from="#2856fc"
              to="#fff"
              dur={`50ms`}
              begin={`circle-timer-animation-${this.props.id}.begin + ${this.props.delay - 50}ms`}
              fill="freeze"/>
          </circle>
          <text textAnchor="middle" x={this.props.x} y={this.props.y + 10} className="circle-text">{this.props.id}</text>
        </g>
      </g>
    );
  }


  render() {
    return this.renderCircles();
  }
}

function mapStateToProps({game}){
  return { startTime: game.startTime }
}

export default connect(mapStateToProps, actions)(Circle);
