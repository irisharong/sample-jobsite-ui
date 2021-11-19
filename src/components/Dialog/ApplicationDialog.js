import React from "react";
import {Dialog, DialogContent} from '@material-ui/core';

const ApplicationDialog = ({ open, handleClose }) => {

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: { borderRadius: 35 }
      }}
    >
      <DialogContent>
        <div className="dialog-content">
          <header className="head">
            <h3 className="heading-3">Submit Application</h3>
            <button className="button -round" onClick={handleClose}>
              <img src="img/close.png" alt="" />
            </button>
          </header>
          <p>
            Please give a brief description of why you would be a good
            fit for this job, attach your resume and any refrence
            materials you would like.
          </p>
          <div className="filter">
            <label className="control checkbox">
              <input type="checkbox"  />
              <span className="control-indicator"></span>
              <span>Attached Resume</span>
            </label>
          </div>
          <div className="box-inner -gray mt">
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
      </DialogContent>
    </Dialog>
  )
}

export default ApplicationDialog;