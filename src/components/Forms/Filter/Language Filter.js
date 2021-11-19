import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControlLabel, Checkbox, Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="language"
                        defaultValue="english"
                        name="radio-buttons-group"
                        color="primary"
                      >
                        <FormControlLabel value="english" control={<Radio color="primary" />} label="English" />
                        <FormControlLabel value="anything" control={<Radio color="primary" />} label="Anything" />
                      </RadioGroup>
                    </FormControl>