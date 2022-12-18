import { Component } from 'react'

import './App.css'

// class Component
class App extends Component {
  // local State
  constructor() {
    super()

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '1'
        },
        {
          name: 'Frank',
          id: '2'
        },
        {
          name: 'Jacky',
          id: '3'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
    )
  }
}

export default App
