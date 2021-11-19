import React from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import SignUp from 'components/SignUpForm/SignUp';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Welcome(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();

  return (
    <div
        className={classes.pageHeader}
        style={{
          backgroundColor: "rgba(228,228,228,0.25)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes[cardAnimaton]}>
                <CardBody>
                  <Typography>Thank you for signing up! Please verify your account, you will receive an email to confirm your information.</Typography>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
      </div>
    </div>
  );
}

export default Welcome;
