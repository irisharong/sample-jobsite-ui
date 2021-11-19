import React from 'react';
import { DialogContent, makeStyles, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import NavPills from "components/NavPills/NavPills.js";

import AboutFormSettings from 'components/Forms/ProfileSettings/AboutFormSettings';
import SkillsFormSettings from 'components/Forms/ProfileSettings/SkillsFormSettings';
import InterestFormSettings from 'components/Forms/ProfileSettings/InterestFormSettings';

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
}));

const AccountSettingsDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: { borderRadius: 35 }
      }}
    >
      <DialogContent className={`${classes.root}`}>
        <NavPills
          alignStart
          color="primary"
          tabs={[
            {
              tabButton: "Details",
              tabContent: (
                <AboutFormSettings />
              ),
            },
            {
              tabButton: "Skills & Experience",
              tabContent: (
                <SkillsFormSettings />
              ),
            },
            {
              tabButton: "Job Interests",
              tabContent: (
                <InterestFormSettings />
              ),
            },
          ]}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AccountSettingsDialog;