import React from "react";
import BookShelfList from "./BookShelfList";

class BookShelf extends React.Component {
  render() {
    const data = this.props.data;
    const listItems = data.map(item => <li key={item.toString()}>{item}</li>);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {listItems}
            <BookShelfList />
            <BookShelfList />
            <BookShelfList />
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
