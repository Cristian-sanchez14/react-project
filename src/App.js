import { Component } from 'react'
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

import './App.css'

// class Component
class App extends Component {
  // 1. local State
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // 3. for Api request
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  onSearchChange = (event) => {
    console.log('onSearchChange')
    console.log(event.target.value)
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  // 2.
  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <SearchBox
          className="monster search-box"
          onChangeHandle={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
