import React, { useState } from 'react';

import SidebarMenu from 'components/nav/Sidebar';
import FindHelpList from 'components/FindHelp/FindHelpList';

export default function FindHelp(props) {
  
  return (
    <div className="page-wrap">
      <div className="page-container">
        <div className="page-main">
          <SidebarMenu page='home' />          
          <main className="page-content">
            <FindHelpList />
          </main>
        </div>
      </div>
    </div>
  );
}