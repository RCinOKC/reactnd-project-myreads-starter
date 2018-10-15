import React from 'react'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
      <Route exact path='/' 
        render={() => 
          <ListBooks/>
        }
      >Search</Route>

      <Route path='/search' component={SearchBooks}>Search</Route>
      </div>
    )
  }
}

export default BooksApp