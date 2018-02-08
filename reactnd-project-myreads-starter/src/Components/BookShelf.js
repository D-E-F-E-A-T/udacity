import React from "react";
import * as BooksAPI from "../BooksAPI";

class BookShelf extends React.Component {
  handleChange(event) {
    BooksAPI.update({ id: event.target.id }, event.target.value).then(data => {
      console.log(data);
    });
  }
  render() {
    const data = this.props.data;
    const listItems = data.map((item, index) => {
      const url = item.imageLinks.thumbnail;
      return (
        <li key={index}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: "url(" + url + ")"
                }}
              />
              <div className="book-shelf-changer">
                <select value="read" id={item.id} onChange={this.handleChange}>
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{item.title}</div>
            <div className="book-authors">{item.authors}</div>
          </div>
        </li>
      );
    });

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{listItems}</ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
