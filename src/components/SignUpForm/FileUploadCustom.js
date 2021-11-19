import * as React from "react";
import { Button } from "@material-ui/core";
import {
  Controller,
  useFormContext,
  useController,
  get
} from "react-hook-form";
const FileUploadCustom = ({ ...props }) => {
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
            <label htmlFor="dlg-btn-inpt-file"> 
              <Button className="px-5 py-2" variant="contained" color="secondary"component="span">
                Upload
              </Button>
            </label>  
        </>
      }
    />
    
  );
};

export default FileUploadCustom;