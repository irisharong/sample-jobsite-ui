// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "./Navigation";
import SidebarItem from "./SidebarItem";
// Components
import Logout from "components/Logout/Logout";

// Styles && Images
import Logo from "../../assets/logo/logo.svg";
import premium from "assets/img/get-premium.png";
import userImg from "assets/img/user.png";
import arrow from "assets/img/arrow.png";
  
export default function SidebarMenu(props) {
  const user = localStorage.getItem('user');
  
  const [selected, setSelected] = useState();

  const handleSelect = (id) => {
    setSelected(id);
  }

  return (
    <aside className="page-sidemenu">
      <a href="#!" className="logo">
        <img src={Logo} alt="" />
      </a>
      <span className="menu-label">Pages</span>
      <ul className="page-menu">
        {navigation.map((nav) => (
          <SidebarItem
            key={nav.id}
            nav={nav}
            active={nav.id === selected}
            onClick={() => handleSelect(nav.id)}
          />
        ))}
      </ul>
      <div className="box-gradient">
        <img src={premium} alt="" />
        <button className="button -white">Get Premium</button>
      </div>
      <button className="button button-pop">
        <img src={userImg} alt="" />
        <div>
          <strong>Dredgen Yor</strong>
          {user ? (
            <Logout />
          ) : (
            <span>Premium </span>
          )}
        </div>
        <img src={arrow} alt="" />
      </button>
    </aside>
  );
}