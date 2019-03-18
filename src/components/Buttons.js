import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

class Buttons extends Component {
  render(){
    return (
      <div>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);
export default Buttons;