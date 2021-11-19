import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import RegisterDialog from 'components/Dialog/RegisterDialog';
import EmployerDialog from 'components/Dialog/EmployerDialog';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginTop: '20px',

    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  button: {
    width: '360px',
    padding: '15px',
    textTransform: 'none',
  },
  fontGray: {
    color: '#B2B3BD',
  },
  fontSmall: {
    fontSize: '0.8rem',
  },
  spaceLeft: {
    paddingLeft: '15px',
  },
  hide: {
    display: 'none',
  },
}));



const SignUp = ({ handleClose }) => {
  const classes = useStyles();

  const [openContractor, setOpenContractor] = useState(false);
  const [openEmployer, setOpenEmployer] = useState(false);

  // function to handle modal close
  const handleContractorClose = () => {
    setOpenContractor(false);
  };

  const handleContractorForm = () => {
    setOpenContractor(true);
  };

  // function to handle modal close
  const handleEmployerClose = () => {
    setOpenEmployer(false);
  };

  const handleEmployerForm = () => {
    setOpenEmployer(true);
  };

  return (
    <>
      <div className={classes.root}>
        <div>
          <Typography className={`${classes.spaceLeft} ${classes.fontGray} ${classes.fontSmall}`}>Please Select your path</Typography>
          <Button onClick={handleEmployerForm} variant="outlined" color="primary" className={`${classes.root} ${classes.button}`}>
            Employer
          </Button>
          <Button onClick={handleContractorForm} variant="contained" color="secondary" className={classes.button}>
            Contractor
          </Button>
        </div>
      </div>
      <EmployerDialog openEmployer={openEmployer} handleEmployerClose={handleEmployerClose}  />
      <RegisterDialog openContractor={openContractor} handleContractorClose={handleContractorClose}  />
    </>
  );
};

export default SignUp;