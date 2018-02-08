import React from "react";
// import BookShelfList from "./BookShelfList";

class BookShelf extends React.Component {
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
                <select>
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
