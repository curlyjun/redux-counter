import {
  INCREMENT,
  DECREMENT,
  SET_DIFF
} from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
  value : 0,
  diff : 1
}

const counter =  (state = counterInitialState, action) => {
  switch(action.type){
    case INCREMENT: 
    return Object.assign({}, state , {
      value: state.value + state.diff
    });
    case DECREMENT: 
    return Object.assign({}, state , {
      value: state.value - state.diff
    });
    case SET_DIFF: 
    return Object.assign({}, state , {
      diff: action.diff
    })
    default: return state;
  }
}

const extraReducer =(state = "this is extra reducer state value", action) =>{
  switch(action.type){
    default: return state;
  }
}

const counterAppReducers = combineReducers({
  counter,
  extraReducer
})
export default counterAppReducers;