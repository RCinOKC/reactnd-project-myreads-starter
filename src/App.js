import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' component={ListBooks}>Search</Route>
      <Route path='/search' component={SearchBooks}>Search</Route>
      </div>
    )
  }
}

export default BooksApp