import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BrandBar from './BrandBar';
import BookSections from './BookSections';

class ListShelves extends Component {
  render() {
    const { onShelfChange, books } = this.props;

    return (
      <div className="list-books">
        <BrandBar />
        <div className="list-books-content">
          <BookSections
            onShelfChange={onShelfChange}
            books={books.filter(b => b.shelf === 'currentlyReading')}
            shelfName="Currently Reading"
          />
          <BookSections
            onShelfChange={onShelfChange}
            books={books.filter(b => b.shelf === 'wantToRead')}
            shelfName="Want to Read"
          />
          <BookSections
            onShelfChange={onShelfChange}
            books={books.filter(b => b.shelf === 'read')}
            shelfName="Read"
          />
          <Link to="/search">
            <div className="open-search">
              <p>Add some Books</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListShelves;
