import React from 'react';
import { Router, Route } from 'react-router-dom';
import BookList from '../components/books/BookList';
//import BookCreate from '../components/books/BookCreate';
import BookCreate from '../components/books/BookComponent';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={BookList}></Route>
                    <Route path="/books/create" exact component={BookCreate}></Route>
                </div>
            </Router>
        </div>
    );
};

export default App;