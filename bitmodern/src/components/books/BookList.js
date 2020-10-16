import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/index';
import { Link } from 'react-router-dom';

class BookList extends React.Component {

    componentDidMount() {
        this.props.fetch();
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <div className="item" key={book.id}>
                    <i className="large middle aligned icon book" />
                    <div className="content">
                        {book.title}
                        <div className="description">
                            {book.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Books</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                <div>
                    <Link to="/books/create" className="ui button primary">
                        Create Book
                    </Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { books: Object.values(state.books) };
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        fetch: () => dispatch(fetchBooks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);