import React, { useState } from 'react';
import { useParams } from 'react-router';

import videoImage from "assets/img/video.png";

export default function AboutContractor( props ) {
  const { about } = props;
  const { id } = useParams();

  return (
    <div className="tab-container">
      <div className="page-row">
        <div className="box-card -col4">
          <header className="head">
            <h3 className="heading-3">About {about.firstName}</h3>
          </header>
          <div className="table-list">
            <div className="tr">
              <div className="td">Hourly Rate</div>
              <div className="td -blue2">{about.rate}/hr</div>
            </div>
            <div className="tr">
              <div className="td">Job Title</div>
              <div className="td">{about.jobTitle}</div>
            </div>
            <div className="tr">
              <div className="td">Years of Experience</div>
              <div className="td">{about.yrsExperience} Years</div>
            </div>
            <div className="tr">
              <div className="td">FT/PT</div>
              <div className="td">Open to both</div>
            </div>
            <div className="tr">
              <div className="td">Location</div>
              <div className="td">{about.location}</div>
            </div>
            <div className="tr">
              <div className="td">Language</div>
              <div className="td">{about.language}</div>
            </div>
            <div className="tr">
              <div className="td">Website</div>
              <div className="td">
                <a href="#!">{about.website}</a>
              </div>
            </div>
            <div className="tr">
              <div className="td">Skills</div>
            </div>
            <div className="tr">
              <div className="tag-item">
                <span className="items">Skill Tag</span>
                <span className="items">Skill Tag</span>
                <span className="items">Skill Tag</span>
                <span className="items">Skill Tag</span>
                <span className="items">Skill Tag</span>
                <span className="items">Skill Tag</span>
              </div>
            </div>
          </div>
          {id ? (
            <div className="cta mt-2 -group2">
              <button className="button -blue2">Message</button>
              <button className="button -blue">View Resume</button>
            </div>
          )
          : (
            <div className="cta mt-2">
              <button className="button -blue -w-full">View Resume</button>
            </div>
          )}
          
        </div>
        <div className="box-card -col5">
          <header className="head">
            <h3 className="heading-3">{about.firstName}'s Bio</h3>
          </header>
          <div className="text">
            <p className="has-image -right">
              <img src={videoImage} alt="" />
              {about.bio}
            </p>
            <p>
              {about.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};