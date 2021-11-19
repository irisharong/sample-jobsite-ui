import React from 'react';
import { DialogContent, makeStyles, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import LoginForm from '../LoginForm/LoginForm';

import 'views/Registration/registration.styles.scss';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '40px',
    paddingTop: '40px',

    '& .MuiTypography-h6': {
      fontSize: '2.2rem',
      fontWeight:'700'
    },
    '& ,.MuiDialogContent-root': {
      padding: '8px 40px',
    },
    '& .MuiTypography-body1': {
      display: 'inline',
      paddingRight: '10px',
    }
  },
}));

const ModalDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
    <Dialog
      maxWidth="xs"
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: { borderRadius: 35 }
      }}
    >
      <DialogContent className={`${classes.root}`}>
        <p className="registration__title">Sign In</p>
        <p className="registration__new-text">New User? <Link to="/register" className="registration__new-link">Create an account</Link></p>
        <LoginForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;