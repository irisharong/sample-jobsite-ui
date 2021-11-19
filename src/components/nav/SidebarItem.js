import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SidebarItem(props) {
  const { active, onClick } = props;
  const {
    id,
    path,
    name,
    icon,
    badge,
  } = props.nav;

  return (
    <>
      <li>
        <Link key={id} onClick={onClick} className={ active ? "-active" : ""} to={path}>
          {badge}
          {icon}
          {name}
        </Link>          
      </li>
    </>
  )
}

export default SidebarItem
