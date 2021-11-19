import React, { useState } from 'react';

export default function Messages(props) {
  return (
    <>
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
          <div className="drawer-item">
            <a href="#!" className="item">
              <div className="image">
                <img
                  src="https://picsum.photos/45/45/?random=1"
                  alt=""
                />
              </div>
              <div className="text">
                <p>hello..?</p>
                <time>3m ago</time>
              </div>
              <span className="badge"> 2 </span>
            </a>
          </div>
          <div className="drawer-item">
            <a href="#!" className="item -active">
              <div className="image">
                <img
                  src="https://picsum.photos/45/45/?random=2"
                  alt=""
                />
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
                <time>1m ago</time>
              </div>
              <span className="badge"> 2 </span>
            </a>
          </div>
          <div className="drawer-item">
            <a href="#!" className="item">
              <div className="image">
                <img
                  src="https://picsum.photos/45/45/?random=2"
                  alt=""
                />
              </div>
              <div className="text">
                <p>Did you finish the slide?</p>
                <time>1m ago</time>
              </div>
              <span className="badge"> 1 </span>
            </a>
          </div>
          <div className="drawer-item">
            <a href="#!" className="item">
              <div className="image">
                <img
                  src="https://picsum.photos/45/45/?random=2"
                  alt=""
                />
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.
                </p>
                <time>1m ago</time>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="box-card -col mt-6 stacked-sidebar -small -right">
        <header className="head">
          <h3 className="heading-3">Back End Developer Needed ASAP!</h3>
          <button className="button -tiny -boxed">
            <img src="img/dots_black.png" alt="" />
          </button>
        </header>
        <div className="segment">
          <div className="box-inner px">
            <div className="chat">
              <div className="chat-item">
                <div className="image">
                  <img
                    src="https://picsum.photos/55/55/?random=1"
                    alt=""
                  />
                </div>
                <div className="text">
                  <div className="user">
                    <a href="#!">Jesus Brown</a>
                    <time>3m ago</time>
                  </div>
                  <div className="message">
                    <div>
                      <p>
                        Thank you, I have installed the plugin, I just
                        need to wait until the file finishes
                        downloading.
                      </p>
                    </div>
                    <div>
                      <p>i get back to work now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat">
              <div className="chat-item">
                <div className="image">
                  <img
                    src="https://picsum.photos/55/55/?random=3"
                    alt=""
                  />
                </div>
                <div className="text">
                  <div className="user">
                    <a href="#!">Mithrax</a>
                    <time>3m ago</time>
                  </div>
                  <div className="message">
                    <div className="attachment">
                      <p>
                        @jesus. Hi there, Sent you a new video, check
                        it out
                      </p>
                      <div className="-button">
                        <a href="#!"
                          ><img src="img/ribbon.png" alt=""
                        /></a>
                        <a href="#!"
                          ><img
                            src="img/3209421_detail_dot_many_more_tripple_icon.png"
                            alt=""
                        /></a>
                      </div>
                    </div>
                    <div>
                      <p>wait a bit, let me checkw</p>
                    </div>
                    <div>
                      <p>i get back to work now</p>
                    </div>
                    <div className="attachment-item">
                      <a href="#!">
                        <img
                          src="https://picsum.photos/55/55/?random=9"
                          alt=""
                        />
                        <div>
                          Attachment.png
                          <strong>3.6 MB</strong>
                        </div>
                      </a>
                      <a href="#!">
                        <img
                          src="https://picsum.photos/55/55/?random=8"
                          alt=""
                        />
                        <div>
                          Attachment.png
                          <strong>3.6 MB</strong>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat">
              <div className="chat-item">
                <div className="image">
                  <img
                    src="https://picsum.photos/55/55/?random=6"
                    alt=""
                  />
                </div>
                <div className="text">
                  <div className="user">
                    <a href="#!">Mithrax</a>
                    <time>3m ago</time>
                  </div>
                  <div className="message">
                    <div>
                      <p>
                        Thank you, I have installed the plugin, I just
                        need to wait until the file finishes
                        downloading.
                      </p>
                    </div>
                    <div>
                      <p>wait a bit, let me checkw</p>
                    </div>
                    <div>
                      <p>i get back to work now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-inner -gray mt-3">
            <div className="editor">
              <div className="formatting">
                <button className="button -tiny">
                  <img src="img/sunglass.png" alt="" />
                </button>
                <button className="button -tiny">
                  <img src="img/bold-text-option.png" alt="" />
                </button>
                <button className="button -tiny">
                  <img src="img/italic.png" alt="" />
                </button>
                <button className="button -tiny ml-a">
                  <img
                    src="img/211600_plus_circled_icon.png"
                    alt=""
                  />
                </button>
              </div>
              <div className="paragraph">
                <p>Thanks for your feedback We're</p>
              </div>
            </div>
          </div>
          <div className="-center b0 mt">
            <button className="button -blue -full">Send more</button>
          </div>
        </div>
      </div>
    </>
  );
}