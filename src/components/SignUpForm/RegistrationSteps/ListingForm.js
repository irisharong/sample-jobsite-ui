import React, { useState } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";

import InputCustom from 'components/Forms/InputCustom';
import "components/LoginForm/form.styles.scss";
import InputRadioRate from '../InputRadioRate';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    marginTop: '20px',
    '& .MuiAvatar-root': {
      width: '85px',
      height: '85px',
    },
  },
  fontGray: {
    color: '#B2B3BD',
  },
  fontSmall: {
    fontSize: '0.8rem',
  },
  widthHalf: {
    width: '210px',
  },
}));

const ListingForm = ({ pageTitle, btnLabel, data }) => {
  const classes = useStyles();
  
  return (
    <div className="mt-3">
      <Typography variant="h4">{pageTitle}</Typography>
      
      <div className={classNames(classes.root, 'form-main')} >
        <div>
          <label className="form-main__label">Job Title</label>
          <InputCustom
            placeholder="Enter job title ..."
            name="jobTitle"
            id="jobTitle"
            type="text"
            className="form-main__text"
            value={data ? data.title : ''}
            required
          />
        </div>  

        <div className="form-main__grid form-main__grid--col1">
          <label className="form-main__label">Language Needed</label>
          <InputCustom
            placeholder="Enter language needed ..."
            name="jobLanguage"
            className="form-main__text"
            type="text"
            required
          />              
        </div>
        
        <div className="form-main__grid">
          <label className="form-main__label">Duration</label>
          <InputCustom
            placeholder="Enter duration ..."
            name="duration"
            className="form-main__text"
            type="text"
            required
          />
        </div>  

        <label className="form-main__label">
          Pay
        </label>
        <div>
          <ul className="pay-toggle">
            <li>
              <InputRadioRate type="radio" id="fixed" value="fixed" name="rateStatus" />
            </li>
            <li>
              <InputRadioRate type="radio" id="hourly" value="hourly" name="rateStatus" />
            </li>
            <li>
              <InputCustom
                placeholder="$"
                name="rateAmount"
                className="form-main__text form-main__text-small"
                type="text"
                required
              />
            </li>
          </ul>
        </div>

        <div>
          <label className="form-main__label">Job Description</label>
          <InputCustom
            placeholder="Enter job description ..."
            name="jobDesc"
            multiline
            rows={4}
            className="form-main__text form-main__textarea"
          />
        </div>

        <div>
          <label className="form-main__label">Job Skills</label>
          <InputCustom
            placeholder="Enter job skills ..."
            name="jobSkills"
            multiline
            rows={4}
            className="form-main__text form-main__textarea"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingForm;