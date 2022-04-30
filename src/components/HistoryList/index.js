import { Component } from "react";

import DeleteItem from "../DeleteItem";

import "./index.css";

class HistoryList extends Component {
  state = { searchValue: "" };

  searchValue = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const { intialItems } = this.props;
    const { searchValue } = this.state;
    const searchResult = intialItems.filter((eachSearch) =>
      eachSearch.title.includes(searchValue)
    );
    return (
      <div className="main">
        <div className="header">
          <div className="image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="history-logo"
            />
          </div>
          <div className="search-bar">
            <div className="search-logo">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="logo-img"
              />
            </div>

            <input
              type="search"
              placeholder="serach history"
              className="input"
              onChange={this.searchValue}
            />
          </div>
        </div>

        <ul className="suggestions-list">
          {searchResult.map((each) => (
            <DeleteItem
              itemDetails={each}
              key={each.id}
              OnDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default HistoryList;
