import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "@material-ui/core/Icon";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submitLogin } from "app/store/auth/loginSlice";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import "./form.styles.scss";

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(4, "Password is too short - should be 4 chars minimum."),
});

const defaultValues = {
  email: "",
  password: "",
};
const LoginForm = ({ handleClose }) => {
  const history = useHistory();
  const user = localStorage.getItem("user"); console.log(user);

  const dispatch = useDispatch();
  const authLogin = useSelector(({ login }) => login);
  const { control, setValue, formState, handleSubmit, reset, setError } =
    useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(schema),
    });

  const { isValid, dirtyFields, errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  const [success, setSuccess] = useState(false);
  const [sending, setSendingState] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setSuccess(authLogin.success);
  }, [authLogin.success, setSuccess]);

  useEffect(() => {
    setError("email", {
      type: "manual",
      message: authLogin.errors.error,
    });
    setError("password", {
      type: "manual",
      message: authLogin.errors.error,
    });
    setErrorMsg(authLogin.errors.error);
    setSendingState(false);
  }, [authLogin.errors, setError]);

  function onSubmit(model) {
    dispatch(submitLogin(model));
  }

  return (
    <div className="form-main">
      {success ? (
        user.role === "contractor" ?
          ( history.push("/settings")) :
          ( history.push("/employer"))
      ) : (
        <>
          {(errorMsg) && 
            <div className="form-main__error">
              <Icon className="form-main__error--span">error_outline</Icon>
              <span>{errorMsg}</span>
            </div>
          }
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="form-main__label">Email</label>            
              <Controller
                placeholder="Enter email address ..."
                control={control}
                name="email"
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      className="form-main__text"
                      type="text"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      required
                      style={{ border: errors?.email?.message ? '1px solid red' : '' }}
                    />
                  </>
                )}
              /> 
              {(!!errors.email) &&  <p className="form-main__error-small">{errors?.email?.message}</p>}        
            </div> 
            
            <div>
              <label className="form-main__label">Password</label>
              <Controller
                placeholder="Enter password ..."
                control={control}
                name="password"
                render={({ field }) => (
                  <input
                    {...field}
                    className="form-main__text"
                    type="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    required
                    style={{ border: errors?.password?.message ? '1px solid red' : '' }}
                  />
                )}
              />
              {(!!errors.password) &&  <p className="form-main__error-small">{errors?.password?.message}</p>} 
            </div>
            <div className="form-main__buttons">
              <button
                type="submit"
                className="form-main__buttons--button form-main__buttons--button-primary"
                aria-label="LOG IN"
                // disabled={dirtyFields === "" || !isValid}
                variant="primary"
              >
                {sending ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  "Sign In"
                )}
              </button>
              <button
                type="submit"
                className="form-main__buttons--button form-main__buttons--button-secondary"
              >
                Sign In with Google
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginForm;
