import React from 'react';
import FileUploadCustom from 'components/SignUpForm/FileUploadCustom';
import { useForm } from "react-hook-form";

const FormUploadImage = ({ handleUploadChange }) => {
  const { register } = useForm();
  return (
    <div>
      <FileUploadCustom
        name="avatar"
        accept="image/*"
        className="d-none"
        id="dlg-btn-inpt-file"
        type="file"
        onChange={handleUploadChange}
        ref={register}
      />
    </div>
  );
};

export default FormUploadImage;
