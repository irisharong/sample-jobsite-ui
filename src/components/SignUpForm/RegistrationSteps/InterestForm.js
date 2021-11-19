import React from 'react';
import { MenuItem, Typography } from '@material-ui/core';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import InputCustom from 'components/Forms/InputCustom';
import "components/LoginForm/form.styles.scss";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    marginTop: '20px',
    '& .MuiAvatar-root': {
      width: '85px',
      height: '85px',
    },
  },
  divButton: {
    marginTop: '2rem',
  },
  fontGray: {
    color: '#B2B3BD',
  },
  fontSmall: {
    fontSize: '0.8rem',
  },
  widthHalf: {
    width: '210px',
  }
}));

export default function InterestForm() {
  const classes = useStyles();

  
  return (
    <>
      <Typography>What are you looking for?</Typography>
      <div className="form-main">
        <Typography className="form-main__label">Job Preferences</Typography>
        <div>
          <div className="form-main__grid form-main__grid--col1">
            <label className="form-main__label">Full Time or Part Time</label>
            <InputCustom
              placeholder="Both"
              name="jobStatus"
              className="form-main__text"
              type="text"
              required
            />              
          </div>

          <div className="form-main__grid">
            <label className="form-main__label">Hourly Rate</label>
            <InputCustom
              placeholder="Enter rate ..."
              name="rate"
              className="form-main__text"
              type="text"
              required
            />
          </div>  
        </div>
        <Divider  className="my-4" />
        <Typography className="form-main__label">Job Interest</Typography>
        <div >
          <div>
            <label className="form-main__label">What kind of Jobs are you interested in</label>
            <InputCustom
              placeholder="Enter job interest ..."
              name="interest"
              multiline
              rows={4}
              className="form-main__text form-main__textarea-small"
            />
          </div>
        </div>
      </div>
    </>
  );
};
