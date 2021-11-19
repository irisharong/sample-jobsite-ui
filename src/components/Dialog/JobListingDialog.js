import React, {useState, useEffect} from 'react';
import { DialogContent, makeStyles, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import ListingForm from "components/SignUpForm/RegistrationSteps/ListingForm"

import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/store/auth/registerSlice';



const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '40px',
    paddingTop: '40px',
  },
}));

const defaultValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  companySize: '',
  location: '',
  website: '',
  industry: '',
  description: '',
  avatar: '',
  membership: 'basic'
};

const schema = yup.object().shape({
  jobTitle: yup.string().required('You must enter Job title'),
  jobLanguage: yup.string().required('You must enter Job preferred language'),
  duration: yup.string().required('You must enter Job duration'),
  rateStatus: yup.string().required('You must chose rate status'),
  rateAmount: yup.string().required('You must enter rate amount'),
  jobDesc: yup.string().required('You must enter Job description'),
  jobSkills: yup.string().required('You must enter Job skills'),
});

const JobListingDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  const { formState, handleSubmit, reset, trigger, setError  } = methods;
  
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
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: { borderRadius: 25 }
      }}
    >
      <DialogContent className={`${classes.root}`}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <ListingForm pageTitle="New Job Listing"/>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              className="w-100 py-3 mt-4"
            >
              {sending ? (<CircularProgress size={22} color="inherit" />) : "Next: Show me contractors" }
            </Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default JobListingDialog;