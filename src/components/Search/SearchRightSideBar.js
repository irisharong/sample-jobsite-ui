import React from "react";
import CheckboxFilter from 'components/Forms/Filter/CheckboxFilter';

export default function SearchRightSideBar() {

  return (
    <div className="-col2 stacked-sidebar">
      <header className="page-header">
        <div className="search-form">
          <input
            type="search"
            aria-label="Search"
            placeholder="Search"
          />
        </div>
        <div className="notify">
          <span className="badge">2</span>
          <button><img src="img/notify.png" alt="" /></button>
        </div>
      </header>
      <div className="box-card mt-10">
        <header className="head">
          <h3 className="heading-3">Filter</h3>
        </header>
        <form className="controls-stacked">
          <div className="filter">
            <CheckboxFilter />
            <footer className="foot">
              <h3 className="heading-3">Language</h3>
              <div className="filter-inline">
                <label className="control radio">
                  <input
                    type="radio"
                    id="radio1"
                    name="radio"
                    checked="checked"
                  />
                  <span className="control-indicator"></span>
                  <span>English</span>
                </label>
                <label className="control radio">
                  <input type="radio" id="radio2" name="radio" />
                  <span className="control-indicator"></span>
                  <span>Other</span>
                </label>
              </div>
              <button className="button -reset p mt-2">
                Reset all filters
              </button>
            </footer>
          </div>
        </form>
      </div>
    </div>
  )
}

