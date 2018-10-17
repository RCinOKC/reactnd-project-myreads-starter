import React from 'react'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    booklist: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((book) => {
      this.setState({booklist: book})
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => {
      BooksAPI.getAll().then((book) => {
        this.setState({booklist: book})
      });
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' 
          render={() => 
            <ListBooks
            booklist={this.state.booklist}
            moveBook={this.moveBook}
            />
          }
        />

        <Route path='/search' 
          render={() =>
          <SearchBooks
            booklist={this.state.booklist}
            moveBook={this.moveBook}
          />
        }   
        />
      </div>
    )
  }
}

export default BooksApp