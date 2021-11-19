import React, { useState } from 'react';

import Messages from 'components/Profile/Employer/Messages';
import JobListing from 'components/Profile/Employer/JobListing';
import JobListingDialog from 'components/Dialog/JobListingDialog';

import NavPills from "components/NavPills/NavPills";

import SidebarMenu from '../../components/nav/Sidebar';
import ProfileHeader from '../../components/nav/ProfileHeader';
import { Icon } from '@material-ui/core';

export default function EmployerProfile(props) {

  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
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
              user="Max"
              title="Your Jobs"
            />
            <section className="section-row mt-5 section-tab">  
              <NavPills
                alignStart
                color="primary"
                tabs={[
                  {
                    tabButton: "Messages",
                    tabContent: (
                      <div className="page-row">
                        <Messages />
                      </div>
                    ),
                  },
                  {
                    tabButton: "My Job Listing",
                    tabContent: (
                      <div className="page-row">
                        <JobListing />
                      </div>
                    ),
                  },
                ]}
              />  
              <img onClick={handleOpen} className="button-plus" src="img/plus_icon.png" alt="" />
              <JobListingDialog open={open} handleClose={handleClose} />              
            </section> 
          </main>
        </div>
      </div>
    </div>
    </>
  );
}