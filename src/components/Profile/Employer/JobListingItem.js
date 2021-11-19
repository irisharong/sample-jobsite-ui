import React from "react";

export default function JobListingItem(props) {

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
    <div className="drawer-item">
      <a href="#!" className={ active ? "item -active" : "item"} key={id} onClick={onClick} >
        <div className="image">
          <img
            src="https://picsum.photos/45/45/?random=1"
            alt=""
          />
        </div>
        <div className="text">
          <p>{title}</p>
          <time>{rate}</time>
        </div>
      </a>
    </div>
  );
}