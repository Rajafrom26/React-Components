import React, { Component } from 'react'
import './App.css'

class CounterComp extends Component {
  state = { count: 0 }

  IncrementHandler = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  DecrementHandler = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  render() {
    
    return (
      <div>
        <h1>Welcome to React</h1>
        <h3>Counter Value: {this.state.count}</h3>
        <button className='btn btn-primary me-2' onClick={this.IncrementHandler}>
          Increment
        </button>
        <button className='btn btn-secondary' onClick={this.DecrementHandler}>
          Decrement
        </button>
      </div>
    )
  }
}

export default CounterComp
