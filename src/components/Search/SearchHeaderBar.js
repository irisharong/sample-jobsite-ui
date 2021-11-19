import React from "react";

export default function SearchBar({...props}) {

  return (
    <>
      <div className="search-filter mb-2 mt-6">
        <div>
          <label className="select">
            <select>
              <option selected>Most Recent Jobs</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </label>
        </div>
        <div className="-search-ui2">
          <div className="search-form">
            <input
              type="search"
              aria-label="Search"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="tab-item -ui2">
        <a href="#!" className="tabs -active">UI/UX</a>
        <a href="#!" className="tabs">Front End</a>
        <a href="#!" className="tabs">Back End</a>
        <a href="#!" className="tabs">Data Science</a>
        <a href="#!" className="tabs">Sales</a>
      </div>
    </>
  )
}