import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import booksReducer from './bookReducer';

export default combineReducers({
    form: formReducer,
    books: booksReducer
});