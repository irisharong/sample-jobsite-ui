import React, { useState } from 'react';
import { Avatar, Typography, Tooltip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core/styles';

import FormUploadImage from 'components/Upload/FormUploadImage';
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
    '& .MuiDialogContent-root': {
      padding: '8px 25px',
    }
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

export default function AboutForm() {
  const classes = useStyles();
  const [pictureUrl, setPictureUrl] = useState('');
  function handleUploadChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = () => {
      setPictureUrl(`data:${file.type};base64,${btoa(reader.result)}`);      
    };
    reader.onerror = () => {
      console.log('error on load image');
    };
  }

  return (
    <div className="mt-3">
      {/* <Typography>Please tell us more about you</Typography> */}
      <div className={classNames(classes.root, 'my-4')}>
        <div>
          <Typography className={(classes.fontGray, classes.fontSmall)}>
            Your Avatar
          </Typography>
        </div>
        <div className="d-inline-flex">
          <Avatar id="dlg-prof-img" alt="contact avatar" src={pictureUrl} />
        </div>        
        <div className="d-inline-block" id="add-image-action">
            <FormUploadImage id="form-upload-image" handleUploadChange={handleUploadChange} />
          <div className="px-3">
            <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
              Avatars help people know who they might work with!
            </Typography>
          </div>  
        </div>                
      </div>
      <Divider />
          <div className={classNames(classes.root, "form-main")}>
            <div className="form-main__grid form-main__grid--col1">
              <label className="form-main__label">Your Full Name</label>
              <InputCustom
                placeholder="Enter name ..."
                name="name"
                className="form-main__text"
                type="text"
                required
              />              
            </div>

            <div className="form-main__grid">
              <label className="form-main__label">Email</label>
              <InputCustom
                placeholder="Enter email address ..."
                name="email"
                className="form-main__text"
                type="email"
                required
              />
            </div>     

            <div className="form-main__grid form-main__grid--col1">
              <label className="form-main__label">Password</label>
              <InputCustom
                placeholder="Enter password..."
                name="password"
                className="form-main__text"
                required
                type="password"
              />
            </div>
            <div className="form-main__grid">
              <label className="form-main__label">Confirm Password</label>
              <InputCustom
                placeholder="Confirm password..."
                name="passwordConfirm"
                className="form-main__text"
                required
                type="password"
              />
            </div> 

            <div className="form-main__grid form-main__grid--col1">
              <label className="form-main__label">Language</label>
              <InputCustom
                placeholder="Enter language ..."
                name="language"
                className="form-main__text"
                type="text"
                required
              />
            </div>

            <div className="form-main__grid">
              <label className="form-main__label">Location</label>
              <InputCustom
                placeholder="Enter location ..."
                name="location"
                className="form-main__text"
                type="text"
                required
              />
            </div>     

            <div>
              <label className="form-main__label">Website</label>
              <InputCustom
                placeholder="Enter website ..."
                name="website"
                id="website"
                type="text"
                className="form-main__text"
              />
            </div>  
            <div>
              <label className="form-main__label">Bio</label>
              <InputCustom
                placeholder="Enter Bio ..."
                name="bio"
                multiline
                rows={4}
                className="form-main__text form-main__textarea"
              />
            </div>  
          </div>
          
          
    </div>
  );
};
