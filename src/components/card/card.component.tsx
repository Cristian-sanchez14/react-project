// import { Component } from 'react'
import { Monster } from '../../App'
import '../card/card.styles.css'


type CardProps = {
  monster: Monster;
}
// functional Components
const Card = ({ monster }: CardProps) => {
  const { id, email, name } = monster

  return (
    <div className="card-container" key={id}>
      {' '}
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     )
//   }
// }
