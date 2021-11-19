import React from "react";
import notify from "assets/img/notify.png";

export default function Badge({...props}) {

  return (
    <div className="notify">
      <span className="badge">2</span>
      <button><img src={notify} alt="" /></button>
    </div>
  )
}
      