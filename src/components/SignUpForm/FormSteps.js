import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AboutForm from './RegistrationSteps/AboutForm';
import SkillsForm from './RegistrationSteps/SkillsForm';
import InterestForm from './RegistrationSteps/InterestForm';

import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/store/auth/registerSlice';

import _ from "lodash";
import { CircularProgress } from '@material-ui/core';
import InputCustom from 'components/Forms/InputCustom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiStepper-root': {
      display: 'none',
    }
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


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
  userRole: ''
};

function getSteps() {
  return ['Profile', 'Skills', 'Last'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AboutForm  />;
    case 1:
      return <SkillsForm  />;
    case 2:
      return <InterestForm />;
    default:
      return 'Unknown step';
  }
}

const getButtonLabel = (step) => {

  switch (step) {
    case 0:
      return "Next: You Skills";
    case 1:
      return "Next: Job Interest";
    case 2:
      return "Next: Membership";
    default:
      return 'Next';
  }
}

export default function FormSteps() {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const classes = useStyles();

  const validationSchema = [
    //validation for step1
    yup.object().shape({
      name: yup.string().required('You must enter your name'),
      email: yup.string().email('You must enter a valid email').required('You must enter a email'),
      password: yup
        .string()
        .required('Please enter your password.')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
      passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
      language: yup.string().required('You must enter your language'),
      location: yup.string().required('You must enter your location'),
    }),

    //validation for step2
    yup.object().shape({
      jobTitle: yup.string().required('You must enter your Job Title'),
      yrsExperience: yup.string().required('You must enter your years of experience'),
      skills: yup.string().required('You must enter your skills'),
    }),
    //validation for step3
    yup.object().shape({
      jobStatus: yup.string().required('You must choose your job status'),
      rate: yup.string().required('You must enter your Rate'),
      interest: yup.string().required('You must enter Job you are interested'),
    })
  ];
  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange"
  });
  const { formState, handleSubmit, reset, trigger, setError  } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {success ?
          history.push("/welcome") 
          
          : (
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={classes.instructions}>
                {getStepContent(activeStep)}
                {activeStep  === steps.length - 1 && (
                  <Typography color="error">{errorMsg}</Typography>
                )}
              </div>

              <div>
                <InputCustom
                  name="userRole"
                  className="form-main__text"
                  type="hidden"
                  value="contractor"
                />
              </div>

              <div className="d-flex justify-content-end">
                {activeStep !== 0 && (
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="w-50 py-3"
                  >
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                    className="w-50 py-3"
                  >
                    {sending ? (<CircularProgress size={22} color="inherit" />) : "Sign Up" }
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    form="registerAboutForm"
                    onClick={handleNext}
                    className="w-50 mx-0 py-3"
                    // disabled={dirtyFields ==='' || !isValid}
                  >
                    {getButtonLabel(activeStep)}
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        )}
      </div>
    </div>
  );
}