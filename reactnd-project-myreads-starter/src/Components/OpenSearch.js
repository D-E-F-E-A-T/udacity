import React from "react";

class OpenSearch extends React.Component {
  render() {
    return (
      <div className="open-search">
        <a onClick={this.props.openSearch}>Add a book</a>
      </div>
    );
  }
}

export default OpenSearch;
