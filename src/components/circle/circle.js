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

  render() {
    return <circle onClick={this.hit} cx={this.props.x} cy={this.props.y} className="circle"/>
  }
}

export default connect(null, actions)(Circle);
