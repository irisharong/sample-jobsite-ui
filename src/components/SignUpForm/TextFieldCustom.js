import * as React from "react";
import { MenuItem, TextField } from "@material-ui/core";
import {
  Controller,
  useFormContext,
  useController,
  get
} from "react-hook-form";
const TextFieldCustom = ({ ...props }) => {
  const { fieldState } = useController(props); 
  const { control, formState } = useFormContext();
  const error = get(formState.errors, props.name);
  const errorText = fieldState.invalid ? error : "";

  return (

    <Controller
      name={props.name}
      control={control}
      render={({ field }) => 
        !props.select ? (
          <TextField
            {...field}
            {...props}          
            helperText={error?.message}
            error={!!errorText}
            defaultValue={props.defaultValue}
          />
        ) : (          
          <TextField            
            {...field}
            {...props} 
            helperText={error?.message}
            error={!!errorText}
            defaultValue={props.defaultValue}
          >
            {props.options.map( (value, key) => 
              <MenuItem key={key} value={value}>{value}</MenuItem>
            )}
          </TextField>
        )        
      }
    />
    
  );
};

export default TextFieldCustom;