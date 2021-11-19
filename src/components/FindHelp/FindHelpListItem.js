import React, { useState } from "react";

function FindHelpListItem(props) {

  const {
    id,
    name,
    logo,
    rate,
    job_status,
    work_range,
    language,
    location,
    title,
    description,
  } = props.contractor;

  const {active, onClick} = props;

  return (
    <div key={id} onClick={onClick}  className= { active ? "box-inner -blue mt" : "box-inner -border mt"} >
      <div className="segment-row">
        <div className="img">
          <a href="#!"
            ><img
              src="img/avatar50.jpg"
              alt=""
          /></a>
        </div>
        <div className="text">
          <div className="head">
            <div className="meta">
              <a href="#!">{title}</a>
              <strong className="blue2">{rate}</strong>
              <small>{language}</small>
              <small>{location}</small>
            </div>
          </div>
          <div className="title">
            <a href="#!">
              {name}
            </a>
          </div>
          <div className="paragraph">
            <p>
              {description}
            </p>
          </div>
          <div className="tag-item -icon">
            <span className="items"
              ><img src="img/speech-bubble.png" alt=""
            /></span>
            <span className="items"
              ><img src="img/star.png" alt=""
            /></span>
            <span className="items"
              ><img src="img/dots.png" alt=""
            /></span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default FindHelpListItem;
