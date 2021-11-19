import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  upload: {
    border: '2px solid #1E3E85',
    borderRadius: '20px',
  }
}));

export default function UploadButtons({ handleUploadChange, fileName }) {
  const classes = useStyles();
  
  return (
    <div className={classNames(classes.root, classes.upload, 'd-flex justify-content-between' )}>
      <span className="py-4 ps-4">{fileName}</span>
      <input
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleUploadChange}
        name="resume"
      />
      <label htmlFor="contained-button-file">
        
        <Button variant="contained" color="secondary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}