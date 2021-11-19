import React, { useState } from 'react';
import { makeStyles, MenuItem, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";
import Button from '@material-ui/core/Button';

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

const ContractorInterestForm = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [status, setStatus] = useState('');
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
      <Typography>What are you looking for?</Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>Job Preferences</Typography>
        <div className="mb-5 mt-4 d-flex justify-content-between">
          <TextField
            id="select"
            label="Full Time or Part"
            select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className={classNames(classes.widthHalf, 'mr-3')}
          >
            <MenuItem value="fullTime">Full Time</MenuItem>
            <MenuItem value="partTime">Part Time</MenuItem>
            <MenuItem value="both">Both</MenuItem>
          </TextField>
          <TextField
            label="Hourly Rate"
            required
            value={experience}
            type="text"
            id="fullname"
            variant="standard"
            onChange={e => setExperience(e.target.value)}
            className={classNames(classes.widthHalf, 'mr-3')}
          />
        </div>
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>Job Interest</Typography>
        <div className="mb-5 mt-4 d-flex justify-content-between">
          <TextField
            label="What kind of Jobs are you interested in"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
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

export default ContractorInterestForm;
