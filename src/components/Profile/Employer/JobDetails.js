import React, { useState } from 'react';

export default function JobDetails(props) {
  return (
    <section className="section-row mt-15">
      <div className="tab-container">
        <div className="page-row">
          <div className="box-card -col3">
            <header className="head">
              <h3 className="heading-3">Job Details</h3>
            </header>
            <div className="table-list">
              <div className="tr">
                <div className="td">Company</div>
                <div className="td">Bungie</div>
              </div>
              <div className="tr">
                <div className="td">Website</div>
                <div className="td">
                  <a href="#!">www.Dillionsays.com</a>
                </div>
              </div>
              <div className="tr">
                <div className="td">Pay</div>
                <div className="td -blue2">$2,000</div>
              </div>
              <div className="tr">
                <div className="td">Duration</div>
                <div className="td">1 Month</div>
              </div>
              <div className="tr">
                <div className="td">Location</div>
                <div className="td">Worldwide</div>
              </div>
              <div className="tr">
                <div className="td">Language</div>
                <div className="td">🚩English Preffered</div>
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
            <div className="cta mt-2 -group2">
              <button className="button -blue">Apply</button>
              <button className="button -gray">Favorite</button>
            </div>
          </div>
          <div className="box-card">
            <header className="head">
              <h3 className="heading-3">Jobs Description</h3>
            </header>
            <div className="paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};