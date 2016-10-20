import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from '../map/map';
import * as actions from '../../actions';

class Playground extends Component {
  constructor() {
    super();

    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.props.startGame(this.props.selectedMap);
  }

  render() {
    return ( 
      <div>
          <button onClick={this.startGame}>Start</button>
          <Map objects={this.props.shapes}></Map>
          <span>Score: {this.props.score}</span>
      </div>
    );
  }
}

function mapStateToProps({shapes, selectedMap, score}) {
  return { shapes, selectedMap, score }
}

export default connect(mapStateToProps, actions)(Playground);
