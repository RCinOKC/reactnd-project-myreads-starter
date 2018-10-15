import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class ListBooks extends React.Component {
  state = {
    booklist:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((book) => {
      this.setState({booklist: book})
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((book) => {
      this.setState({booklist: book})
    });

  }

    render(){
      console.log(this.props.booklist);

        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title='Currently Reading'
                  booklist={this.state.booklist.filter(booklist => booklist.shelf === 'currentlyReading')}
                  moveBook={this.moveBook}
                  shelf={'currentlyReading'}
                />
                <Bookshelf title='Want To Read'
                  booklist={this.state.booklist.filter(booklist => booklist.shelf === 'wantToRead')}
                  moveBook={this.moveBook}
                  shelf={'wantToRead'}

                  />
                <Bookshelf title='Read'
                  booklist={this.state.booklist.filter(booklist => booklist.shelf === 'read')}
                  moveBook={this.moveBook}
                  shelf={'read'}
                  />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Search</Link>
            </div>
          </div>
          
        )
    }
}
export default ListBooks