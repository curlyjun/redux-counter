import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

//Action type
const INCREMENT = "INCREMENT"

//Action
function increase(diff) {
  return {
    type: INCREMENT,
    addBy: diff
  }
}

const initialState = {
  value: 0
}
//Reducer -> fure fn!!
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: return Object.assign({}, state, {
      value: state.value + action.addBy
    });
    default:
      return state;
  }
}

//Store
const store = createStore(counterReducer);

//Counter app

class App extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.store.dispatch(increase(1));
  }
  render(){
    let style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer'
    }
    return (
      <div onClick={this.onClick} style= {style}>
        <h1>{this.props.store.getState().value}</h1>
      </div>
    );
  }
}

const Render = () => ReactDOM.render(<App store={store}/>, document.getElementById('root'));
store.subscribe(Render);
Render();