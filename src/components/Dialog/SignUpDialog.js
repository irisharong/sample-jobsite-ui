import React, {useState} from 'react';
import { DialogContent, makeStyles, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SignUp from '../SignUpForm/SignUp';
import { Link } from "react-router-dom";

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
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
    '& .MuiButton-containedSecondary': {
      backgroundColor: '#52b4da',
    },
  },
  fontGray: {
    color: '#B2B3BD',
  },
  fontSmall: {
    fontSize: '0.8rem',
  },
  marginTop: {
    marginTop: '30px',
  },
  divButton: {
    marginTop: '2rem',
  },
  button: {
    width: '360px',
    padding: '15px',
    textTransform: 'none',
  },
  closeButton: {
    float: "right",
    borderRadius: "50%",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    margin: "0!important",
  },
}));

const SignUpDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  
  return (
    <>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { borderRadius: 35 }
        }}
      >

        <DialogTitle className={`${classes.root} ${classes.marginTop}`} id="simple-dialog-title">Sign Up</DialogTitle>
        <DialogContent className={`${classes.root}`}>
          <Typography className={`${classes.fontGray} ${classes.fontSmall}`}>Existing User?</Typography>
          <Link to="/login" className={`${classes.fontSmall}`}>Sign In</Link>
          <SignUp handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignUpDialog;