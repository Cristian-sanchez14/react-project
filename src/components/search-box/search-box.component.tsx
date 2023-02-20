// import { Component } from 'react'
import './search-box.css'
import { ChangeEvent } from 'react';

// typescript function
type SearchBoxProps = {
  className: string,
  placeholder: string,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}


// functional components
const SearchBox = ({ 
  className, 
  placeholder, 
  onChangeHandler 
}: SearchBoxProps) => (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler} 
    />
);

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
