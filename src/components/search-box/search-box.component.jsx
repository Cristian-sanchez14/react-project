// import { Component } from 'react'
import './search-box.css'

// functional components
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    //         // onchange handler
    onChange={onChangeHandler}
  />
)

export default SearchBox

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onchange handler
//         onChange={this.props.onChangeHandler}
//       />
//     )
//   }
// }
