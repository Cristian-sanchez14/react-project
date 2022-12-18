import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// class Component
class App extends Component {
  // local State
  constructor() {
    super()

    this.state = {
      name: { fristName: 'Cristian', lastName: 'Zhang' },
      company: 'ztm'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.fristName} {this.state.name.lastName} , I work
            at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: 'James', lastName: 'Gomez' }
                  }
                },
                () => {
                  console.log(this.state)
                }
              )
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    )
  }
}

export default App
