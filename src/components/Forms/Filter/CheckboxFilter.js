import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControlLabel, Checkbox, Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { jobFilter } from "mock/findJobFilter";
import classNames from "classnames";

const useStyles = makeStyles(styles => ({
  root: {
    '& .MuiButton-root': {
      textTransform: 'none'
    },
  },
}));

const CheckboxFilter = () => {
  const classes = useStyles();

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setList(jobFilter);
  }, [list]);

  const handleSelectAll = e => {
    e.preventDefault();
    setIsCheck(list.map(li => li.id));
    setIsCheckAll(true);
  };

  const handleUnSelectAll = e => {
    e.preventDefault();
    setIsCheck([]);
    setIsCheckAll(false);
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  const filterCheckbox = list.map(({ id, name }) => {
    return (
      <label key={id} className="control checkbox">
        <input type="checkbox" id={id} checked={isCheck.includes(id)} onChange={handleClick} />
        <span className="control-indicator"></span>
        <span>{name}</span>
      </label>
    );
  });

  return (    
    <div className={classNames(classes.root, "my-4")}>                    
      <FormGroup>
        {filterCheckbox}
      </FormGroup>
      <div className="filter-inline mt-3">
        <button onClick={handleUnSelectAll} className={isCheckAll ? "button -blank -mid" : "button -blue2 -mid"}>
          Unselect all
        </button>
        <button onClick={handleSelectAll} className={isCheckAll ? "button -blue2 -mid" : "button -blank -mid"}>
          Select all
        </button>
      </div>
    </div>
  );
};

export default CheckboxFilter;