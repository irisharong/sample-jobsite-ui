// Libraries
import React from "react";

// Components
import SearchHeaderBar from "./SearchHeaderBar"

export default function SearchHeader({...props}) {
  return (
    <>
      <header className="page-header">
        <div className="text">
          <h2 className="heading-2">Welcome {props.user}</h2>
          <h1 className="heading-1">{props.title}</h1>
        </div>
      </header>
      <SearchHeaderBar />
    </>
  );
}