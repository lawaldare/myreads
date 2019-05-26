import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SearchPage from './components/SearchPage';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/search" component={SearchPage} />
  </BrowserRouter>,
  document.getElementById('root')
);
