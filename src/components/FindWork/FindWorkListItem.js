import React, { useState } from "react";

function FindWorkListItem(props) {

  const {
    id,
    company_name,
    logo,
    rate,
    job_status,
    work_range,
    language,
    title,
    description,
  } = props.job;

  const {active, onClick} = props;

  return (
    <div key={id} onClick={onClick}  className= { active ? "box-inner -blue mt" : "box-inner -gray mt"} >
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
              <a href="#!">{company_name}</a>
              <strong className="blue2">{rate}</strong>
              <small>{job_status}</small>
              <time>{work_range}</time>
              <small>{language}</small>
              <time>12h</time>
            </div>
          </div>
          <div className="title">
            <a href="#!">
              {title}
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

export default FindWorkListItem;
