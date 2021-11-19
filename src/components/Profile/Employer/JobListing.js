import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import ListingForm from "components/SignUpForm/RegistrationSteps/ListingForm"
import JobListingItem from "./JobListingItem";

import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/store/auth/registerSlice';

import { jobList } from "mock/findJobList";

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

export default function JobListing(props) {
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

  const data = jobList;
  const [selected, setSelected] = useState(false);
  const [jobTitle, setJobTitle] = useState('');

  const handleSelect = (selectedId) => {
    setSelected(selectedId);
    const jobTitle = data.map(({ id, title }) => {
      if(selectedId === id)
        return title;
    });

    setJobTitle(jobTitle);
  }

  return (
    <>
      <div className="-col2">
        <div className="search-filter mb-2 mt-6">
          <div className="-search-ui2">
            <div className="search-form">
              <input
                type="search"
                aria-label="Search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <div className="drawer">
          <header className="head">
            <a href="#!" className="text"
              >Active Job Listing
              <img src="img/down-arrow-gray.png" alt="" />
            </a>
          </header>
         
          
          {data.map((job) => (
            <JobListingItem
              key={job.id}
              job={job}
              active={job.id === selected}
              onClick={() => handleSelect(job.id)}
            />
          ))}
        </div>
      </div>
      <div className="box-card -col mt-6 stacked-sidebar -small -right">
        <header className="head">
          <h3 className="heading-3">{jobTitle}</h3>
          <button className="button -tiny -boxed">
            <img src="img/dots_black.png" alt="" />
          </button>
        </header>
        <div className="segment">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <ListingForm pageTitle="" data={data} />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
                className="w-100 py-3 mt-4"
              >
                {sending ? (<CircularProgress size={22} color="inherit" />) : "Save Changes" }
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  )
};