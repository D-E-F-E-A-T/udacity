import React from "react";
import BookShelfList from "./BookShelfList";

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.data(data => <BookShelfList data={data} />)}
            <BookShelfList />
            <BookShelfList />
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
