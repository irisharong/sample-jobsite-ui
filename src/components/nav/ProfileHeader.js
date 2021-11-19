// Libraries
import React from "react";

// Components
import SearchBar from "./../form/SearchBar"
import Badge from "components/Badge/Badge"

export default function ProfileHeader({...props}) {
  return (
    <header className="page-header">
      <div className="text">
        <h2 className="heading-2">Welcome {props.user}</h2>
        <h1 className="heading-1">{props.title}</h1>
      </div>
      
      <div className="-right">
        <SearchBar />
        <Badge />
      </div>
    </header>
  );
}