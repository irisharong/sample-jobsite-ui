import React, { useState } from 'react';

import SidebarMenu from 'components/nav/Sidebar';
import FindWorkList from 'components/FindWork/FindWorkList';

export default function FindJob(props) {
  
  return (
    <div className="page-wrap">      
      <div className="page-container">
        <div className="page-main">
          <SidebarMenu page='home' />          
          <main className="page-content">
            <FindWorkList />
          </main>
        </div>
      </div>
    </div>
  );
}