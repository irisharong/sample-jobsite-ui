import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SkillsForm from 'components/SignUpForm/RegistrationSteps/SkillsForm';

import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/store/auth/registerSlice';

import _ from "lodash";
import { CircularProgress } from '@material-ui/core';


/**
 * Form Validation Schema
 */
 const schema = yup.object().shape({
  jobTitle: yup.string().required('You must enter your Job Title'),
  yrsExperience: yup.string().required('You must enter your years of experience'),
  skills: yup.string().required('You must enter your skills'),
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
  jobTitle: '',
  skills: '',
  jobStatus: 'Full Time',
  rate: '',
  interest: '',
  avatar: '',
  resume: '',
};

export default function SkillsFormSettings() {
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
        <SkillsForm />

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