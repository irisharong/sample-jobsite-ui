import React from 'react';
import { DialogContent, makeStyles, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import EmployerFormSteps from '../SignUpForm/EmployerFormSteps';

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
  closeButton: {
    float: "right",
    borderRadius: "50%",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    margin: "0!important",
  },
}));

const EmployerDialog = ({ openEmployer, handleEmployerClose }) => {
  const classes = useStyles();
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={openEmployer}
      onClose={handleEmployerClose}
      PaperProps={{
        style: { borderRadius: 35 }
      }}
    >
      <DialogContent className={`${classes.root}`}>
        <IconButton onClick={handleEmployerClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
        <EmployerFormSteps handleEmployerClose={handleEmployerClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EmployerDialog;