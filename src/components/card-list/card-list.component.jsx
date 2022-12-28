// import { Component } from 'react'
import './card-list.css'

import Card from '../card/card.component'

// functional components
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />
    })}
  </div>
)
export default CardList

// class Component:

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />
//         })}
//       </div>
//     )
//   }
// }
