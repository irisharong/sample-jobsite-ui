import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import classNames from "classnames";

import ReactGA from 'react-ga';

import { useDispatch, useSelector } from 'react-redux';
import { confirmEmail } from 'app/store/auth/confirmSlice';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    marginTop: '20px',
  },
}));

const ConfirmEmail = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const authConfirm = useSelector(({ confirm }) => confirm);
 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(confirmEmail(props.token, props.email))


    ReactGA.event({
      category: 'Verify',
      action: 'User Verify Email'
    });
  }, []);

  useEffect(() => {
    setSuccessMessage(authConfirm.message);
    setLoading(false);
  }, [authConfirm.message, setLoading, setSuccessMessage]);

  useEffect(() => {
    setErrorMessage(authConfirm.errors);
  }, [authConfirm.errors, setErrorMessage]);


  return (
    <div className="mt-3 text-center p-5">
      {!loading && successMessage !== '' ? (
        <>
        <h2> {successMessage} </h2>
        <div className={classNames(classes.root, 'my-4')}>
          <div>
            <Typography>
              Thank you for joining the Contest. Good luck!
            </Typography>
          </div>              
        </div>
        </>
      ) : (
       
          <>
          <h2>Validating Email... </h2>
          <div className={classNames(classes.root, 'my-4')}>
            <div>
              <Typography>
                Please wait
              </Typography>
            </div>              
          </div>
          </>
      )}      
    </div>
  );
};

export default ConfirmEmail;