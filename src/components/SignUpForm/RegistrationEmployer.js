import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { registerEmployer } from 'app/store/auth/registerSlice';

import ReactGA from 'react-ga';

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

/**
 * Form Validation Schema
 */
 const schema = yup.object().shape({
  name: yup.string().required('You must enter your name'),
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
});

const defaultValues = {
  name: '',
  email: '',
  promo: '',
};

const RegistrationEmployer = ({ handleClose }) => {
  const classes = useStyles();
  
  const dispatch = useDispatch();
  const authRegister = useSelector(({ register }) => register);
  
  const { control, formState, handleSubmit, reset, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [sending, setSendingState] = useState(false);

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setSuccessMessage(authRegister.message);
  }, [authRegister.message, setSuccessMessage]);

  useEffect(() => {
    setError("email", {
      type: "manual",
      message: authRegister.errors.message,
    });
    setSendingState(false)
  }, [authRegister.errors, setError, setSendingState]);

  function onSubmit(model) {
    dispatch(registerEmployer(model));
    setSendingState(true);

    ReactGA.event({
      category: 'Employer',
      action: 'Register Employer Account'
    });
  }


  return (
    <div className="mt-3 text-center">
      <h2>Sign Up! </h2>
      <div className={classNames(classes.root, 'my-4')}>
        <div>
          <Typography className={(classes.fontGray, classes.fontSmall)}>
          Let’s get some basic information together so we can get you up and running.
          </Typography>
        </div>              
      </div>
      
      {successMessage !== '' ? (
        <Typography variant="h5" color="secondary">
          {successMessage}
        </Typography>
      ) : (

      <form
        name="registerEmployerForm"
        noValidate
        className="flex flex-col justify-center w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-4"
              label="Name"
              autoFocus
              type="name"
              error={!!errors.name}
              helpertext={errors?.name?.message}
              variant="standard"
              required
              fullWidth
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-4"
              label="Email"
              type="email"
              error={!!errors.email}
              helpertext={errors?.email?.message}
              variant="standard"
              required
              fullWidth
            />
          )}
        />

        <Controller
          name="promo"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-4"
              label="Promo Code (if applicable)"
              variant="standard"
              fullWidth
            />
          )}
        />
        
        <Button
          variant="contained"
          color="primary"
          className="w-100 mx-auto mt-5"
          aria-label="Register"
          disabled={dirtyFields === "" || !isValid}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      )}
    </div>
  );
};

export default RegistrationEmployer;