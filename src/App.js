import React, { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/Card-List'
import { Card } from './components/card/Card'

class App extends Component {
  constructor() {
    super() // this gives us access to the 'this.' method
    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App
