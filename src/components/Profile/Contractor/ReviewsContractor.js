import React, { useState } from 'react';
import StarRating from 'components/StarRating/StarRating';


import avatar from "assets/img/avatar-50x50.jpg";
import rating from "assets/img/rating.JPG";

export default function ReviewsContractor(props) {
const { reviews } = props;

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
            {reviews.map((review) => (
              <div className="segment-row">
                <div className="img">
                  <img src={avatar} alt="" />
                </div>
                  <div className="text">
                    <div className="head">
                      <div class="meta">
                        <a href="#!">{review.employerName}</a>
                        <div>
                          <StarRating />
                        </div>
                        <time>{review.workRange}</time>
                      </div>
                    </div>
                    <div className="title">
                      <a href="#!">
                        {review.jobTitle}
                      </a>
                    </div>
                    <div className="paragraph">
                      <p>
                        {review.description}
                      </p>
                    </div>
                    <div className="tag-item">
                      <span className="items">{review.totalPaid}</span>
                      <span className="items">{review.rate}</span>
                      <span className="items">{review.totalHours}</span>
                    </div>
                  </div>
              </div>   
            ))}         
          </div>
        </div>
      </div>
    </div>
  )
};