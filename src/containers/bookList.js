import React, {Component} from 'react';
import { connect } from 'react-redux';
//Container == promotion of component
//Container is a component that has direct connection to state managed by redux


class BookList extends Component {
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> {book.title}</li>
            );
        });
    }
    
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList}
            </ul>
        )
    }
}

//pulling specific values off state
function mapStateToProps(state) {
    //whatever is returned here shows up as props in `this.props`
    return {
        books: state.books
    };
}


//this is what actually connects this container to the state
//connect takes function and component and produces container
export default connect(mapStateToProps)(BookList);

//when state changes, the contianer will instantly rerender 
//when app state changes, object from state function gets assigned as props