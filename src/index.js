//component == snippets of code the produce html
//multiple component nesting allows for reusability and ease of reading
//components should be their own files (this way you can have mutliple of same on page)
//components can be "containers" for other components (ng-repeat)

//functional component == function (not stateful)
//class component == stateful, JS object class  -- see searchbar

//state is a plain is JS obj used to record and respond to user events.
//each class based component has own state, any change re-renders component and all children components
//to init state, set state in constructor -- see searchBar.js


//GOALS: create new component that produces html and injects to dom

//react allows you to render components
import React from 'react';
//react-dom, divergent allows you to talk to dom
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = '';



//JSX - looks like html but is just javascript
//gets compiled as React.generateElement()

//this is a Class NOT the instance of the component
//need to instantiate the app before rendering to dom
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//if you have a tag with nothing inside of it, you can make it self closing
//ex <App></App> === <App />

//Render takes two params 1. instance 2. target from index.html (if its a class preface with period)
ReactDOM.render(<App />, document.querySelector('.container'));
