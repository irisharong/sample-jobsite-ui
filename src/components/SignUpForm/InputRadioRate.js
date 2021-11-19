import * as React from "react";
import { Typography } from "@material-ui/core";
import {
  Controller,
  useFormContext,
  useController,
  get
} from "react-hook-form";
const InputRadioRate = ({ ...props }) => {
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
          {props.value === 'fixed' ? (
            <label for="fixed">Fixed Rate</label>
          ) : (
            <label for="hourly">Hourly</label>
          )}
        </>
      }
    />
    
  );
};

export default InputRadioRate;