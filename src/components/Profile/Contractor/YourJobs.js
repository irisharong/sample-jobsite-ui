import React, { useState } from 'react';

import SidebarMenu from 'components/nav/Sidebar';
import ProfileHeader from 'components/nav/ProfileHeader';
import MessageList from 'components/YourJobs/MessageList';
import MessageListItem from 'components/YourJobs/MessageListItem';

import { messages } from "mock/messages";

export default function YourJobs() {
  const data = messages;
  const [selected, setSelected] = useState(false);
  const [messageId, setMessageId] = useState();

  const handleSelect = (id) => {
    setSelected(id);
    setMessageId(id);
  }
  return (
    <>
    <div className="page-wrap">
      <div className="page-container">
        <div className="page-main">
          <SidebarMenu page='home' />
          <main className="page-content">
            <section className="section-row">
              <ProfileHeader
                user="Max"
                title="Your Jobs"
              />
              <div className="page-row">
                <div className="-col2">
                  <div className="search-filter mb-2 mt-6">
                    <div className="-search-ui2">
                      <div className="search-form">
                        <input
                          type="search"
                          aria-label="Search"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="drawer">
                    <header className="head">
                      <a href="#!" className="text"
                        >Messages
                        <img src="img/down-arrow-gray.png" alt="" />
                      </a>
                    </header>
                    {data.map((message) => (
                      <MessageList
                        key={message.id}
                        message={message}
                        active={message.id === selected}
                        onClick={() => handleSelect(message.id)}
                      />
                    ))}
                    
                  </div>
                </div>
                <MessageListItem 
                  id={messageId}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
    </>
  )

}