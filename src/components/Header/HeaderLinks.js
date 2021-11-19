/*eslint-disable*/
import React, { useState } from "react";
import ModalDialog from '../Dialog/ModalDialog';
import SignUpDialog from '../Dialog/SignUpDialog';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUp = () => {
    setOpenSignUp(true);
  };
  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };


  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Login
      </Button>
      {/* display the modal and pass props */ }
      <ModalDialog open={open} handleClose={handleClose} />
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button variant="contained" color="secondary" onClick={handleSignUp}>
        Signup
      </Button>
      <SignUpDialog open={openSignUp} handleClose={handleCloseSignUp} />
      </ListItem>
    </List>
  );
}
