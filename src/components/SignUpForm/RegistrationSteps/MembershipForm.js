import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import InputCustom from 'components/Forms/InputCustom';
import "components/LoginForm/form.styles.scss";
import InputRadioMembership from '../InputRadioMembership';
import { useForm } from "react-hook-form";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    marginTop: '20px',
  },
  fontGray: {
    color: '#B2B3BD',
  },
  fontSmall: {
    fontSize: '0.8rem',
  },
  widthHalf: {
    width: '210px',
  }
}));

const MembershipForm = ({ handleClose }) => {
  const classes = useStyles();
  const { register } = useForm();

  return (
    <div className="mt-3">
      <Typography>Please tell us more about your company</Typography>
      <div className={classNames(classes.root, 'my-4')}>
        <div>
          <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
            Membership
          </Typography>
          <div className="container col-md-12" >
            <div className="row memberships-toggle">
              <div className="">
                <ul className="membership-toggle">
                  <li>
                    <InputRadioMembership type="radio" id="basic" value="basic" name="membership" />                    
                  </li>
                  <li>      
                    <InputRadioMembership type="radio" id="premium" value="premium" name="membership" />                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>            
      </div>
      <Divider />
      <div className="form-main">
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
          Credit Card
        </Typography>
        <div>
          <div className="form-main__grid form-main__grid--col1">
            <label className="form-main__label">Name on Card</label>
            <InputCustom
              placeholder="Enter name ..."
              name="cardName"
              className="form-main__text"
              type="text"
              required
            />              
          </div>
          
          <div className="form-main__grid">
            <label className="form-main__label">Card Number</label>
            <InputCustom
              placeholder="Enter card number ..."
              name="cardNumber"
              className="form-main__text"
              type="text"
              required
            />
          </div>  

          <div className="form-main__grid form-main__grid--col1">
            <label className="form-main__label">Expiration Date</label>
            <InputCustom
              placeholder="Enter expiration date ..."
              name="expiry"
              className="form-main__text"
              type="text"
              required
            />              
          </div>
          
          <div className="form-main__grid">
            <label className="form-main__label">CSV</label>
            <InputCustom
              placeholder="Enter CSV number ..."
              name="csv"
              className="form-main__text"
              type="text"
              required
            />
          </div>  
        </div>
       
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
          Other Payments Method
        </Typography>
      </div>
    </div>
  );
};

export default MembershipForm;