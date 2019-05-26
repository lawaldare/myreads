import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from '../BooksAPI';

export default class SearchPage extends Component {
  state = {
    query: '',
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  render() {
    let showingBooks;

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingBooks = this.state.books.filter(book => match.test(book.title));
    } else {
      showingBooks = [];
    }

    showingBooks.sort(sortBy('title'));
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.cover})`
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
