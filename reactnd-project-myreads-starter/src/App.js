import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import OpenSearch from "./Components/OpenSearch";
import BookShelf from "./Components/BookShelf";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false,
      readBookList: [],
      wantBookList: [],
      currentBookList: []
    };
    this.openSearch = this.openSearch.bind(this);
  }

  openSearch() {
    this.setState({ showSearchPage: true });
  }

  componentDidMount() {
    //组件挂载时候获取数据
    BooksAPI.getAll().then(data => {
      this.setState({
        currentBookList: data.filter(item => item.shelf === "currentlyReading"),
        wantBookList: data.filter(item => item.shelf === "wantToRead"),
        readBookList: data.filter(item => item.shelf === "read")
      });
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
      
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                      */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title={"Currently Reading"}
                  data={this.state.currentBookList}
                />
                <BookShelf
                  title={"Want to Read"}
                  data={this.state.wantBookList}
                />
                <BookShelf title={"Read"} data={this.state.readBookList} />
              </div>
            </div>
            <OpenSearch openSearch={this.openSearch} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
