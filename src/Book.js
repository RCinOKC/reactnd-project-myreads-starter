import React from 'react'

//Need to set up dynamic loading of variables


class Book extends React.Component {
    render(){
        let bookThumbnail = this.props.book.imageLinks ?
            this.props.book.imageLinks.thumbnail:
            '';
        console.log(this.props.book);
        return(
            <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookThumbnail}")` }}></div>
                <div className="book-shelf-changer">
                    <select 
                        onChange={(event) => this.props.moveBook(
                            this.props.book, event.target.value
                        )}
                        value={this.props.book.shelf}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="Book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
            </li>
        )
    }
}
export default Book