import React, {useState} from 'react';
import { Avatar, Typography, Tooltip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import classNames from "classnames";

import { makeStyles } from '@material-ui/core/styles';

import InputCustom from 'components/Forms/InputCustom';
import "components/LoginForm/form.styles.scss";

import UploadResume from 'components/Upload/UploadResume';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    marginTop: '20px',
    '& .MuiAvatar-root': {
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

export default function SkillsForm() {
  const classes = useStyles();
  const [fileUrl, setFileUrl] = useState('');
  const [fileName, setFileName] = useState('');

  function handleUploadChange(e) {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.readAsBinaryString(file);

    reader.onload = () => {
      setFileUrl(`data:${file.type};base64,${btoa(reader.result)}`);
      setFileName(fileName);
    };

    reader.onerror = () => {
      console.log('error on load image');
    };
  }
  return (
    <>
      <Typography>What do you do?</Typography>
      <div className="form-main">
        <Typography className="form-main__label">Experience</Typography>
        <div>
          <div className="form-main__grid form-main__grid--col1">
            <label className="form-main__label">Job Title</label>
            <InputCustom
              placeholder="Enter Job title ..."
              name="jobTitle"
              className="form-main__text"
              type="text"
              required
            />              
          </div>
          
          <div className="form-main__grid">
            <label className="form-main__label">Years of experience</label>
            <InputCustom
              placeholder="Enter years of experience ..."
              name="yrsExperience"
              className="form-main__text"
              type="text"
              required
            />
          </div>  
        </div>
        <Divider  className="my-4" />
        <Typography className="form-main__label">Skills</Typography>
        <div>
          <div>
            <label className="form-main__label">Enter skills here</label>
            <InputCustom
              placeholder="Enter skills ..."
              name="skills"
              multiline
              rows={4}
              className="form-main__text form-main__textarea-small"
            />
          </div> 
        </div>
        <Divider  className="my-4" />
        <Typography className="form-main__label">Resume</Typography>
        <div className="my-4">
          <UploadResume  handleUploadChange={handleUploadChange} fileName={fileName} />
        </div>

      </div>
    </>
  );
};
