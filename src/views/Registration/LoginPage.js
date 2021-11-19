import React, {useState} from "react";
import ModalDialog from 'components/Dialog/ModalDialog';

import RRLogoBlue from '../../assets/logo/remote-logo-blue.png';
import './registration.styles.scss';


function LoginPage() {
  const [open, setOpen] = useState(true);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className="registration">
      <img src={RRLogoBlue} className="registration__logo" alt="Logo" />
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
}

export default LoginPage;
