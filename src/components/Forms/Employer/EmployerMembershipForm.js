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

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    marginTop: '20px',
    '& .MuiAvatar-circle': {
      width: '85px',
      height: '85px',
    },
  },
  divButton: {
    marginTop: '2rem',
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

const EmployerMembershipForm = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiration] = useState('');
  const [csv, setCsv] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    handleClose();
  };

  const handleUploadChange = e => {
    console.log('upload image');
  }

  return (
    <div className="mt-3">
      <Typography>Please tell us more about your company</Typography>
      <div className={classNames(classes.root, 'my-5')}>
        <div>
          <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
            Membership
          </Typography>
          <div className="container col-md-12" >
            <div className="row membership-toggle">
              <div className="col-md-6">
                <input type="radio" id="a25" name="membership" />
                <div className="menbership-option">
                  <Typography gutterBottom variant="h5" component="h2">
                    Basic
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  1 Active Job
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Up to 24 hour job post delay
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Basic Placement
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    No messaging job candidates that haven’t applied for your job, you cannot invite candidates to your job, view up to 25 applicants who apply to your job
                  </Typography>
                </div>
              </div>
              <div className="col-md-6">
                <input type="radio" id="a50" name="membership" />
                <div className="menbership-option">
                  <Typography gutterBottom variant="h5" component="h2">
                    Premium
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    $69.99/month
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Up to 25 Active Jobs
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Instant Job Post
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Premium Placement 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Message anyone, unlimited invites to your job, view all applicants who applied to your job
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>            
      </div>
      <Divider />
      <form className={classNames(classes.root, 'my-4')} onSubmit={handleSubmit}>
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
          Credit Card
        </Typography>
        <div className="mb-5 mt-4 d-flex justify-content-between">
            <TextField
              label="Name on Card"
              required
              value={name}
              type="text"
              id="name"
              variant="standard"
              onChange={e => setName(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
            <TextField
              label="Card Number"
              required
              value={cardNumber}
              type="text"
              id="cardNumber"
              variant="standard"
              onChange={e => setCardNumber(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
        </div>
        <div className="mb-5 mt-4 d-flex justify-content-between">
            <TextField
              label="Expiration Date"
              required
              value={expiry}
              type="text"
              id="expiry"
              variant="standard"
              onChange={e => setExpiration(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
            <TextField
              label="CSV"
              variant="standard"
              type="text"
              id="csv"
              required
              value={csv}
              onChange={e => setCsv(e.target.value)}
              className={classNames(classes.widthHalf, 'mr-3')}
            />
        </div>
        <Typography className={classNames(classes.fontGray, classes.fontSmall)}>
          Other Payments Method
        </Typography>
      </form>
    </div>
  );
};

export default EmployerMembershipForm;