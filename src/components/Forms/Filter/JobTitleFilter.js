import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControlLabel, Checkbox, Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { jobTitle } from "mock/jobTitleFilter";
import classNames from "classnames";

const useStyles = makeStyles(styles => ({
  root: {
    '& .MuiButton-root': {
      textTransform: 'none'
    },
  },
}));

const JobTitleFilter = () => {
  const classes = useStyles();

  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(jobTitle);
  }, [list]);

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  const filterTitle = list.map(({ id, name }) => {
    return (
        <div id="ck-button">
          <label>
            <input key={id} type="checkbox" value={id} hidden /><span>{name}</span>
          </label>
        </div>
    );
  });

  return (    
    <div className="d-flex justify-content-between">
      {filterTitle}
    </div>
  );
};

export default JobTitleFilter;