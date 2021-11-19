/*eslint-disable*/
import React, { useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { List, ListItem } from "@material-ui/core";

import SignUpDialog from '../Dialog/SignUpDialog';
import Link from '@material-ui/core/Link';

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,

  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  const [openSignUp, setOpenSignUp] = useState(false);
  const handleSignUp = () => {
    setOpenSignUp(true);
  };
  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              Remote Recruit
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>          
          <Link variant="contained" color="secondary" onClick={handleSignUp}>
            Change Role
          </Link>
          <SignUpDialog open={openSignUp} handleClose={handleCloseSignUp} />
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
