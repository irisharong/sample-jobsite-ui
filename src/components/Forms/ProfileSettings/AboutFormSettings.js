import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AboutForm from 'components/SignUpForm/RegistrationSteps/AboutForm';

import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/store/auth/registerSlice';

import _ from "lodash";
import { CircularProgress } from '@material-ui/core';


/**
 * Form Validation Schema
 */
 const schema = yup.object().shape({
  name: yup.string().required('You must enter your name'),
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  language: yup.string().required('You must enter your language'),
  location: yup.string().required('You must enter your location'),
});

const defaultValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  language: '',
  location: '',
  website: '',
  bio: '',
};

export default function AboutFormSettings() {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  const { formState, handleSubmit, reset, trigger, setError  } = methods;

  const { isValid, dirtyFields, errors } = formState;

  const dispatch = useDispatch();
  const authRegister = useSelector(({ register }) => register);
  const [success, setSuccess] = useState(false);
  const [sending, setSendingState] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setSuccess(authRegister.success);
  },[authRegister.success, setSuccess]);

  useEffect(() => {
    setError("email", {
      type: "manual",
      message: authRegister.errors.message,
    });
    setErrorMsg(authRegister.errors.message);
    setSendingState(false)
  }, [authRegister.errors, setError, setSendingState]);

  function onSubmit(model) {
    // on submit add pictureUrl 
    dispatch(submitRegister(model));
    setSendingState(true);
  }

  return (
    
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <AboutForm />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
          className="w-50 py-3"
        >
          {sending ? (<CircularProgress size={22} color="inherit" />) : "Update Profile" }
        </Button>
      </form>
    </FormProvider>    
 );  
}