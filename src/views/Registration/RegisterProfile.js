import React, { useState } from "react";

import RRLogoBlue from '../../assets/logo/remote-logo-blue.png';
import SignUpDialog from 'components/Dialog/SignUpDialog';

import './registration.styles.scss';

function RegisterPage() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    
    <div className="registration">
      <img src={RRLogoBlue} className="registration__logo" alt="Logo" />
      <SignUpDialog open={open} handleClose={handleClose} />
    </div>
  );
}

export default RegisterPage;
