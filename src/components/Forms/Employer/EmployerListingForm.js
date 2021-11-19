import React, { useState } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";


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
  },
  jobSkills: {
    marginTop: '120px',
  }
}));

const EmployerListingForm = ({ pageTitle, btnLabel }) => {
  const classes = useStyles();
  // create state variables for each input
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [duration, setDuration] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const [payAmount, setPayAmount] = useState('$');

  const handleSubmit = e => {
    e.preventDefault();

    // handleClose();
  };

  const [formats, setFormats] = React.useState(() => ['phone']);

  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  return (
    <div className="mt-3">
      <Typography variant="h4">{pageTitle}</Typography>
      
      <form className={classNames(classes.root, 'my-4')} onSubmit={handleSubmit}>
        <div className="mb-5 mt-4 d-flex justify-content-between">
            <TextField
              label="Job Title"
              required
              value={title}
              type="text"
              id="title"
              variant="standard"
              onChange={e => setTitle(e.target.value)}
              className="mr-3"
              fullWidth
            />
        </div>
        <div className="mb-5 mt-4 d-flex justify-content-between">
          <TextField
              label="Language Needed"
              required
              value={language}
              type="text"
              id="language"
              variant="standard"
              onChange={e => setLanguage(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
            <TextField
              label="Duration"
              variant="standard"
              type="text"
              id="duration"
              required
              value={duration}
              onChange={e => setDuration(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
        </div>
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
          Pay
        </Typography>
        <div className="mb-5 mt-4 ">
          <ul className="pay-toggle">
            <li>
              <input type="radio" id="a25" name="amount" />
              <label for="a25">Fixed Rate</label>
            </li>
            <li>
              <input type="radio" id="a50" name="amount" />
              <label for="a50">Hourly</label>
            </li>
            <li>
              <input type="text" id="payAmount" name="payAmount" value={payAmount} 
              onChange={e => setPayAmount(e.target.value)} />
            </li>
          </ul>
        </div>
        <div className={classNames(classes.jobSkills, "mb-5")}>
            <TextField
              label="Job Description"
              required
              multiline
              value={description}
              type="text"
              id="description"
              variant="outlined"
              rows={4}
              onChange={e => setDescription(e.target.value)}
              fullWidth
            />
        </div>
        <div>
            <TextField
              label="Job Skills"
              required
              value={skills}
              type="text"
              multiline
              rows={4}
              variant="outlined"
              onChange={e => setSkills(e.target.value)}
              fullWidth
            />
        </div>  
        
        <Button
          variant="contained"
          color="primary"
          aria-label="job-listing"
          // disabled={dirtyFields ==='' || !isValid}
          type="submit"
          className="mx-0 my-4 py-3"
          fullWidth
        >
          {btnLabel}
        </Button>      
      </form>
    </div>
  );
};

export default EmployerListingForm;