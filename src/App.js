import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// class Component
class App extends Component {
  // local State
  constructor() {
    super()

    this.state = {
      name: 'Cristian'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button>Change Name</button>
        </header>
      </div>
    )
  }
}

export default App
