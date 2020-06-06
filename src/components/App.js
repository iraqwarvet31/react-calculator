import React, { Component } from "react";
import "bootswatch/dist/litera/bootstrap.min.css";
import "./App.css";

import Display from './Display'
import Keypad from './Keypad'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: ''
    }

  }
  // create reset
  reset = () => {
    this.setState({ result: '' })
  }
  // create clear
  clear = () => {
    this.setState({ result: this.state.result.slice(0,-1)})
  }
  // create calculate
  calculate = () => {
    let finalNumStr = eval(this.state.result).toString()
    if (finalNumStr.length > 10) {
      finalNumStr = finalNumStr.slice(0, 10)
    }
    this.setState({ result: finalNumStr})
  }
  // create displayKey
  displayKey = (button) => {
    this.setState({ result: this.state.result + button})
  }
  // create onClick
  onClick = (button) => {
    switch (button) {
      case 'AC':
        this.reset()
        break
      case 'C':
        this.clear()
        break
      case '=':
        this.calculate()
        break
      default:
        this.displayKey(button)
        break
    }
  }
    

  render() {
    return (
      <>
      <Header />
      <div className="container">
        <div className="jumbotron-fluid">
          <Display result={ this.state.result }/>
          <Keypad onClick={ this.onClick }/>
        </div>
      </div>
      <Footer />
      </>
    )
  }
}


export default App;
