import * as React from "react";
import { Typography } from "@material-ui/core";
import {
  Controller,
  useFormContext,
  useController,
  get
} from "react-hook-form";
const InputRadioMembership = ({ ...props }) => {
  const { fieldState } = useController(props); 
  const { control, formState } = useFormContext();
  const error = get(formState.errors, props.name);
  const errorText = fieldState.invalid ? error : "";

  return (

    <Controller
      name={props.name}
      control={control}
      render={({ field }) => 
        <>
          <input
            {...field}
            {...props}
            helperText={error?.message}
            error={!!errorText}
            
          />
          {props.value === 'basic' ? (
            <label for="basic">
              <div className="membership-option">
                <Typography variant="h4" component="h1">
                  BASIC
                </Typography>
                <Typography variant="body2" color="secondary" className="price mb-3 fw-bold fs-6">
                  Free
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-3 fw-bold">
                1 Active Job
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-3 fw-bold">
                  Up to 24 hour job post delay
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-3 fw-bold">
                  Basic Placement
                </Typography>
                <Typography variant="body2" color="textSecondary" className=" fw-bold">
                  No messaging job candidates that haven’t applied for your job, you cannot invite candidates to your job, view up to 25 applicants who apply to your job
                </Typography>
              </div>
            </label>
          ) : (
            <label for="premium">             
              <div className="membership-option">
                <Typography variant="h4" component="h1">
                  PREMIUM
                </Typography>
                <Typography variant="body2" color="secondary" className="price mb-3 fw-bold fs-6">
                  $69.99/month
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-3 fw-bold">
                  Up to 25 Active Jobs
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-3 fw-bold">
                  Instant Job Post
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-3 fw-bold">
                  Premium Placement 
                </Typography>
                <Typography variant="body2" color="textSecondary" className=" fw-bold">
                  Message anyone, unlimited invites to your job, view all applicants who applied to your job
                </Typography>
              </div>
            </label> 
          )}
        </>
      }
    />
    
  );
};

export default InputRadioMembership;