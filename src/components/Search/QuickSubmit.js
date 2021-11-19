import React from "react";

export default function QuickSubmit ({ handleClose, title, showDesc}) {

  return (

    <div className="stacked-sidebar -small">
      <header className="page-header">
        <div className="-right ml-a">
          <div className="search-form">
            <input
              type="search"
              aria-label="Search"
              placeholder="Search"
            />
          </div>
          <div className="notify">
            <span className="badge">2</span>
            <button><img src="img/notify.png" alt="" /></button>
          </div>
        </div>
      </header>
      <div className="box-card mt-10">
        <header className="head">
          <h3 className="heading-3">{title}</h3>
          <button onClick={handleClose} className="button -round">
            <img src="img/close.png" alt="" />
          </button>
        </header>
        {showDesc && (
          <p>          
          Please give a brief description of why you would be a good
          fit for this job, attach your resume and any refrence
          materials you would like.
        </p>
        )}
        
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
        <div className="-center b0 mt-3">
          <button className="button -blue -full">Send message</button>
        </div>
      </div>
    </div>
  )
}