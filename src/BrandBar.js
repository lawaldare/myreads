import React from 'react';
import { Link } from 'react-router-dom';

const BrandBar = () => (
  <div className="list-books-title">
    <h1>
      <Link to="/" />
      <i
        className="fas fa-book"
        style={{
          backgroundColor: 'Black',
          color: 'ForestGreen',
          borderRadius: '5px'
        }}
      />{' '}
      MyReads: A Book Tracking App
    </h1>
  </div>
);

export default BrandBar;
