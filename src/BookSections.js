import React from 'react';
import BookDisplay from './BookDisplay';

export default function BookSections({ onShelfChange, books, shelfName }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {shelfName}-
        <span
          style={{
            color: 'Tomato'
          }}>
          ({books.length})
        </span>
      </h2>
      {books.length === 0 ? (
        <div className="no-results">Nothing to show</div>
      ) : (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <BookDisplay
                key={book.id}
                book={book}
                onShelfChange={onShelfChange}
              />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
