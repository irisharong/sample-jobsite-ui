import * as React from "react";
import { MenuItem, TextField } from "@material-ui/core";
import {
  Controller,
  useFormContext,
  useController,
  get
} from "react-hook-form";
const InputCustom = ({ ...props }) => {
  const { fieldState } = useController(props); 
  const { control, formState } = useFormContext();
  const error = get(formState.errors, props.name);
  const errorText = fieldState.invalid ? error : "";

  return (

    <Controller
      name={props.name}
      control={control}
      render={({ field }) => 
          !props.multiline ? 
          <>
            <input
              {...field}
              {...props}          
              helperText={error?.message}
              error={!!errorText}
              defaultValue={props.defaultValue}
              style={{ border: fieldState.invalid ? '1px solid red' : '' }}
            />   
            {errorText &&  <p className="form-main__error-small">{error?.message}</p>  }
          </>
          :
          <>
            <textarea
              {...field}
              {...props}          
              helperText={error?.message}
              error={!!errorText}     
              style={{ border: fieldState.invalid ? '1px solid red' : '' }}       
            >  
              {props.defaultValue}
            </textarea>
            {errorText &&  <p className="form-main__error-small">{error?.message}</p>  }
          </>
      }
    />
    
  );
};

export default InputCustom;