import books from '../apis/books';
import history from '../history';

//call the set up server and create post in a json
export const createBook = (book) => async (dispatch) => {
    const response = await books.post('/books', book);
    
    dispatch( {
        type: 'CREATE_BOOK',
        payload: response.data
    });

    history.push('/');
};

export const fetchBooks = () => async (dispatch) => {
    const response = await books.get('/books');

    dispatch({
        type: 'FETCH_BOOKS',
        payload: response.data
    });
};