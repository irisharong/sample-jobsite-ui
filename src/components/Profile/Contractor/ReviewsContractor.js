import React, { useState } from 'react';
import StarRating from 'components/StarRating/StarRating';


import avatar from "assets/img/avatar-50x50.jpg";
import rating from "assets/img/rating.JPG";

export default function ReviewsContractor(props) {

  return (
    <div className="tab-container">
      <div className="page-row">
        <div className="box-card -col">
          <header className="head mt-1-n">
            <h3 className="heading-3">102 Reviews</h3>
            <button className="button -link -has-icon">
              Add New <span className="badge">+</span>
            </button>
          </header>
          <div className="segment">
            <div className="segment-row">
              <div className="img">
                <img src={avatar} alt="" />
              </div>
              <div className="text">
                <div className="head">
                  <a href="#!">New Monarchy</a>
                  <div>
                    <StarRating />
                  </div>
                  <time> August 29 - January 12 </time>
                </div>
                <div className="title">
                  <a href="#!">
                    Senior UI/UX Designer needed for ongoing support
                  </a>
                </div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Est, dolore atque. Id nulla ut
                    magnam maiores atque esse cum
                  </p>
                </div>
                <div className="tag-item">
                  <span className="items">$12,000</span>
                  <span className="items">$60/hr</span>
                  <span className="items">112 Hours</span>
                </div>
              </div>
            </div>
            <div className="segment-row">
              <div className="img">
                <img src={avatar} alt="" />
              </div>
              <div className="text">
                <div className="head">
                  <a href="#!">New Monarchy</a>
                  <div>
                    <StarRating />
                  </div>
                  <time> August 29 - January 12 </time>
                </div>
                <div className="title">
                  <a href="#!">
                    Senior UI/UX Designer needed for ongoing support
                  </a>
                </div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Est, dolore atque. Id nulla ut
                    magnam maiores atque esse cum
                  </p>
                </div>
                <div className="tag-item">
                  <span className="items">$12,000</span>
                  <span className="items">$60/hr</span>
                  <span className="items">112 Hours</span>
                </div>
              </div>
            </div>
            <div className="segment-row">
              <div className="img">
                <img src={avatar} alt="" />
              </div>
              <div className="text">
                <div className="head">
                  <a href="#!">New Monarchy</a>
                  <div>
                    <StarRating />
                  </div>
                  <time> August 29 - January 12 </time>
                </div>
                <div className="title">
                  <a href="#!">
                    Senior UI/UX Designer needed for ongoing support
                  </a>
                </div>
                <div className="paragraph">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Est, dolore atque. Id nulla ut
                    magnam maiores atque esse cum
                  </p>
                </div>
                <div className="tag-item">
                  <span className="items">$12,000</span>
                  <span className="items">$60/hr</span>
                  <span className="items">112 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};