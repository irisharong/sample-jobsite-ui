import React from "react";

export default function SearchBar({...props}) {

  return (
    <div className="search-form">
      <input type="search" aria-label="Search" placeholder="Search" />
    </div>
  )
}