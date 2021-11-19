import React from "react";

export default function MessageList(props) {

  const {
    id,
    avatar,
    time,
    badge,
    jobTitle,
    messages,
  } = props.message;
  const lastMessage = messages[messages.length - 1].message;

  const {active, onClick} = props;

  return (
    <div className="drawer-item">
      <a href="#!" className={ active ? "item -active" : "item"} key={id} onClick={onClick} >
        <div className="image">
          <img
            src="https://picsum.photos/45/45/?random=1"
            alt=""
          />
        </div>
        <div className="text">
          <p>{lastMessage}</p>
          <time>{time} ago</time>
        </div>
        <span className="badge"> {badge} </span>
      </a>
    </div>
  );
}