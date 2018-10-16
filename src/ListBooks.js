import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'


class ListBooks extends React.Component {
    render(){
      return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf title='Currently Reading'
                booklist={this.props.booklist.filter(booklist => booklist.shelf === 'currentlyReading')}
                moveBook={this.props.moveBook}
                shelf={'currentlyReading'}
              />
              <Bookshelf title='Want To Read'
                booklist={this.props.booklist.filter(booklist => booklist.shelf === 'wantToRead')}
                moveBook={this.props.moveBook}
                shelf={'wantToRead'}
              />
              <Bookshelf title='Read'
                booklist={this.props.booklist.filter(booklist => booklist.shelf === 'read')}
                moveBook={this.props.moveBook}
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