import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function PortfolioContractor(props) {
  const { portfolios } = props;  

  return (
    <div className="tab-container">
      <div className="page-row">
        <div className="box-card -col">
          <header className="head mt-1-n">
            <h3 className="heading-3">20 Portfolio Items</h3>
            <button className="button -link -has-icon">
              Add New <span className="badge">+</span>
            </button>
          </header>
          <div className="page-row box-card-grid">
            {portfolios.map((portfolio) => (
              <div className="box-card -bg-image">
                <div className="image">
                  <img src={portfolio.image} alt="" />
                </div>
                <div className="title">
                  <a href="#!">
                    {portfolio.description}
                  </a>
                </div>
                <div className="cta">
                  <a href="#!" className="button -blue -small">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
