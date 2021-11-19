import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";
import Button from '@material-ui/core/Button';

import UploadResume from 'components/Upload/UploadResume';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    marginTop: '20px',
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

const ContractorSkillsForm = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [title, setTitle] = useState('');
  const [experience, setExperience] = useState('');

  const [file, setFile] = useState('');

  // Handles file upload event and updates state
  const handleUpload = (event) => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <Typography>What do you do?</Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>Experience</Typography>
        <div className="mb-5 mt-4 d-flex justify-content-between">
          <TextField
            label="Job Title"
            required
            value={title}
            type="text"
            id="fullname"
            variant="standard"
            onChange={e => setTitle(e.target.value)}
            className={classNames(classes.widthHalf, 'mr-3')}
          />
          <TextField
            label="Years of Experience"
            required
            value={experience}
            type="text"
            id="fullname"
            variant="standard"
            onChange={e => setExperience(e.target.value)}
            className={classNames(classes.widthHalf, 'mr-3')}
          />
        </div>
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>Skills</Typography>
        <div className="mb-5 mt-4 d-flex justify-content-between">
          <TextField
            id="skills"
            label="Enter skills here"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </div>

        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>Resume</Typography>
        <div className="mt-4">
          <UploadResume />
        </div>

        <Button
          variant="contained"
          color="primary"
          aria-label="register"
          // disabled={dirtyFields ==='' || !isValid}
          type="submit"
          className="w-50 mx-0 py-3"
        >
          Update Profile
        </Button>
      </form>
    </>
  );
};

export default ContractorSkillsForm;
