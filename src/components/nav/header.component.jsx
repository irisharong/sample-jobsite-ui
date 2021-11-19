// Libraries
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/fontawesome-free-solid';

// Components
import SearchBar from "./../form/search.component"

// Styles && Images

  
class Header extends Component {
  render() {
    const { user, title } = this.props;
    return (
      <div className="header">
        <div className="header-row d-flex">
          <h2>Welcome, {user}</h2>
          <div className="ms-auto">
            <SearchBar />
            <div className="icon-circle">
              <FontAwesomeIcon className="fa" icon={faBell} />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}
 
export default Header;