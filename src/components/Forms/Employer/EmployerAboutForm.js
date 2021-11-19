import React, { useState } from 'react';
import { Avatar, makeStyles, Typography, Tooltip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";

import FormUploadImage from '../../Upload/FormUploadImage';

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

const EmployerAboutForm = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [industry, setIndustry] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    handleClose();
  };

  const handleUploadChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.readAsBinaryString(file);

    reader.onloadend = (e) => {
       //  this.setState(_.setIn(this.state, `note.image`, `data:${file.type};base64,${btoa(reader.result)}`));
 
       setAvatar(reader.result);
    };

    reader.onerror = function () {
        console.log("error on load image");
    };
  };

  return (
    <div className="mt-3">
      <Typography>Please tell us more about your company</Typography>
      <div className={classNames(classes.root, 'my-5')}>
        <div>
          <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
            Company Logo
          </Typography>
        </div>
        <div className="d-inline-flex">
          <Avatar id="dlg-prof-img" alt="contact avatar" src={avatar} />
        </div>        
        <div className="d-inline-block" id="add-image-action">
            <FormUploadImage id="form-upload-image" onChange={handleUploadChange} />
          <div className="px-3">
            <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
              Avatars help people know who they might work with!
            </Typography>
          </div>  
        </div>                
      </div>
      <Divider />
      <form className={classNames(classes.root, 'my-4')} onSubmit={handleSubmit}>
        <div className="mb-5 mt-4 d-flex justify-content-between">
            <TextField
              label="Company Name"
              required
              value={name}
              type="text"
              id="fullname"
              variant="standard"
              onChange={e => setName(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
            <TextField
              label="Location"
              required
              value={location}
              type="text"
              id="location"
              variant="standard"
              onChange={e => setLocation(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
        </div>
        <div className="mb-5 mt-4 d-flex justify-content-between">
            <TextField
              label="Company Size"
              required
              value={size}
              type="text"
              id="size"
              variant="standard"
              onChange={e => setSize(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
            <TextField
              label="Industry"
              variant="standard"
              type="text"
              id="industry"
              required
              value={industry}
              onChange={e => setIndustry(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
        </div>
        <div className="mb-5 mt-4 ">
            <TextField
              label="Website"
              required
              value={website}
              type="text"
              id="website"
              variant="standard"
              onChange={e => setWebsite(e.target.value)}
              fullWidth
            />
        </div>
        <div>
            <TextField
              label="Description"
              required
              value={description}
              type="text"
              multiline
              rows={4}
              variant="outlined"
              onChange={e => setDescription(e.target.value)}
              fullWidth
            />
        </div>        
      </form>
    </div>
  );
};

export default EmployerAboutForm;