import React, { useState } from 'react';

import JobDetails from 'components/Profile/Employer/JobDetails';
import ApplicationDialog from 'components/Dialog/ApplicationDialog';

import SidebarMenu from '../../components/nav/Sidebar';
import ProfileHeader from '../../components/nav/ProfileHeader';
import Icon from '@material-ui/core/Icon';

import headerBg from "assets/img/undraw_Investing_re_bov7.png";
import editPen from "assets/img/edit.png";
import avatar from "assets/img/undraw_male_avatar_323b.png";

import { profileDetail } from "mock/profileDetails";

export default function JobDetail(props) {
  const data = profileDetail;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className="page-wrap">
      <div className="page-container">
        <div className="page-main">
          <SidebarMenu page='home' />
          <main className="page-content">
              <ProfileHeader
                user={data.firstName}
                title="Let's Find Work"
              />
              <section className="section-row">
                <div
                  className="hero-banner mt-6"
                  style={{ backgroundImage: `url(${headerBg})` }}
                >
                  <button className="button -icon">
                    <img src="img/close.png" alt="" />
                  </button>
                  <div className="text">
                    <h2 className="heading-1">Bungie</h2>
                    <p className="sub-mid mt-1">36 Jobs  <Icon>star</Icon> 4.5</p>
                    <p className="sub mt-2">Seattle Washington, USA</p>
                  </div>
                  <div className="hero-info">
                    <div className="img">
                      <span className="active"></span>
                      <img src={avatar} alt="" />
                    </div>
                    <div className="text -offset">
                      <h3 className="heading-2">
                        Back End Developer Needed For Ongoing Support
                      </h3>
                      <p className="label">
                        <span>Posted 12 hours ago</span>
                      </p>
                    </div>

                    <div className="cta">
                      <button onClick={handleOpen} className="button -blue">Submit Application</button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section-row mt-15">
                <JobDetails />                
              </section> 
          </main>
        </div>
      </div>
    </div>  
    <ApplicationDialog open={open} handleClose={handleClose} />
    </>
  );
}