import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setDiff} from '../actions'

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diff: '1'
    }
    this.onChangeDiff = this.onChangeDiff.bind(this);
  }
  onChangeDiff(e) {
    const {value} = e.target;

    if(value === ""){
      this.setState({
        diff: 0
      });
      this.props.onUpdateDiff(0);
      return ;
    }

    if(isNaN(value)){
      return;
    }

    this.setState({
      diff: value
    })

    this.props.onUpdateDiff(parseInt(value));
  }
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.diff}
          onChange={this.onChangeDiff}></input>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    onUpdateDiff: (value) => dispatch(setDiff(value))
  }
}

Option = connect(undefined, mapDispatchToProps)(Option);

export default Option;