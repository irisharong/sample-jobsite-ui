import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from "axios";

import AccountSettingsDialog from 'components/Dialog/AccountSettingsDialog';
import AboutContractor from 'components/Profile/Contractor/AboutContractor';
import ReviewsContractor from 'components/Profile/Contractor/ReviewsContractor';
import PortfolioContractor from 'components/Profile/Contractor/PortfolioContractor';

import NavPills from "components/NavPills/NavPills";

import SidebarMenu from '../../components/nav/Sidebar';
import ProfileHeader from '../../components/nav/ProfileHeader';

import headerBg from "assets/img/undraw_Investing_re_bov7.png";
import editPen from "assets/img/edit.png";
import avatar from "assets/img/undraw_male_avatar_323b.png";
import checkIcon from "assets/img/326571_check_circle_icon.png";

export default function JobSeekerProfile(props) {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/contractor/profile').then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return null;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
console.log(data);
  const {
    firstName,
    lastName,
    jobTitle,
    jobs,
    earned,
    location,
  } = data.about;

  return (
    <>
    <div className="page-wrap">
      <div className="page-container">
        <div className="page-main">
          <SidebarMenu page='home' />
          <main className="page-content">
              <ProfileHeader
                user={firstName}
                title={id ? "Candidate Profile" : "Your Profile"}
              />
              <section className="section-row">
                <div className="hero-banner mt-6" >
                  <button className="button -icon">
                    <img src={editPen} alt="" />
                  </button>
                  <div className="text mt-3">
                    <h2 className="heading-1">{jobs} Jobs Completed</h2>
                    <p className="sub mt-2">${earned} Earned over 12 Months</p>
                  </div>
                  <div className="hero-info">
                    <div className="img">
                      <span className="active"></span>
                      <img src={avatar} alt="" />
                    </div>
                    <div className="text">
                      <h2 className="heading-1">{firstName} {lastName}</h2>
                      <p className="label">
                        <span>{jobTitle}</span>
                        <span>{location}</span>
                      </p>
                    </div>
                    <div className="status">
                      <img src={checkIcon} alt="" />
                    </div>
                    {id ? (
                      <div className="cta">
                        <button onClick={handleOpen} className="button -blue2">Message</button>
                        <div className="star-button ml-2">
                          <span className="star">&#9733;</span>
                        </div>
                      </div>
                    ) : (
                      <div className="cta">
                        <button onClick={handleOpen} className="button -blue">Edit Profile</button>
                      </div>
                    )}
                    
                  </div>
                </div>
              </section>
              <section className="section-row mt-15">
                <NavPills
                  alignStart
                  color="primary"
                  tabs={[
                    {
                      tabButton: "About",
                      tabContent: (
                        <AboutContractor about={data.about} />
                      ),
                    },
                    {
                      tabButton: "Reviews",
                      tabContent: (
                        <ReviewsContractor reviews={data.reviews} />
                      ),
                    },
                    {
                      tabButton: "Protfolio",
                      tabContent: (
                        <PortfolioContractor portfolios={data.portfolio} />
                      ),
                    },
                  ]}
                />
                
              </section> 
          </main>
        </div>
      </div>
    </div>  
    <AccountSettingsDialog open={open} handleClose={handleClose} />
    </>
  );
}