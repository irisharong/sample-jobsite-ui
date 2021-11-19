import React, {useState, useEffect} from 'react';
import { Avatar, Typography, Tooltip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";

import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/store/auth/registerSlice';
import AboutForm from 'components/SignUpForm/RegistrationSteps/AboutForm';
import FormUploadImage from 'components/Upload/FormUploadImage';
import InputCustom from 'components/Forms/InputCustom';

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

const ContractorAboutForm = ({ registerPage, formContent }) => {

  const classes = useStyles();
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

export default ContractorAboutForm;