import React, { Component } from 'react'
import Counter from './components/Counter.js'
import Option from './components/Option.js'
import Buttons from './components/Buttons.js'
export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Option />
        <Buttons />
      </div>
    )
  }
}
