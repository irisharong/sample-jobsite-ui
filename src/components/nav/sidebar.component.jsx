// Libraries
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCog } from '@fortawesome/fontawesome-free-solid';

// Components

// Styles && Images
import Logo from "../../assets/logo/logo.svg";
import premium from "assets/img/get-premium.png";
import user from "assets/img/user.png";
import arrow from "assets/img/arrow.png";
  
class ResponsiveSidebar extends Component {
  render() {
    return (
      <div className="main-sidebar ">
        <img src={Logo} className="logo"></img>
        <div className="pages_list">
          <h1>Pages</h1>
          <ul>
            <li className={(this.props.page == 'home') ? 'active' : ''}><FontAwesomeIcon className="fa" icon={faHome} /><p>Find Work</p></li>
            <li className={(this.props.page == 'jobs') ? 'active' : ''}><FontAwesomeIcon className="fa" icon={faEnvelope} /> Your Jobs</li>
            <li className={(this.props.page == 'settings') ? 'active' : ''}><FontAwesomeIcon className="fa" icon={faCog} /> Setting</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ResponsiveSidebar;