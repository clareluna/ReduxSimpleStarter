//Imports React, Imports component FROM react as own component
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//This will be helpful for createWedding fields
//This is a class component
class SearchBar extends Component {
  constructor(props) {
    //component has own constructor, to call parent constructor, call super to apply to Component
    super(props);
    // init state object and initialization terms
    //see render function for application (setState function)
    this.state = {term: ''};
  }
  //method on class, every class needs a render method
  render() {
    //manipulating state example
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})} />
          Value of the input: {this.state.term}
      </div>
    );
  }
  //eventHandler for when input changes
  // onInputChange(event) {
  //   console.log("val", event.target.value);
  //
  // }

};


//this allows us to just export the Class to be called in other components
export default SearchBar;
