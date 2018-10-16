import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
    state = {
        query: '',
        searchedBooks: [],
    }
  
    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.getSearchedBooks(query);
    }

    getSearchedBooks = (query) => {
        if (query){
            BooksAPI.search(query).then((searchedBooks) => {
                if (searchedBooks.error){
                    this.setState({searchedBooks: []});
                }else{
                this.setState({searchedBooks: searchedBooks})
                }
            })
        } else {
            this.setState({searchedBooks: []});
        }
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.map(book => {
                            let shelf = "none"

                            this.props.booklist.map(booklst => (
                                booklst.id === book.id ?
                                shelf = booklst.shelf :
                                ""
                            ));

                            return(
                                <div key={book.id}>
                                    <Book
                                        book={book}
                                        moveBook={this.props.moveBook}
                                        booklist={this.props.booklist}
                                        shelf = {shelf}
                                    />
                                </div>
                            );     
                        })
                        }
                    </ol>
                </div>
            </div>    
        ) 
    }
}
export default SearchBooks