import * as React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import "./style.css";

function CheckBox(props) {
  const [checked, setChecked] = useState(false);
  const inputRef = useRef();

  const toggleCheckBox = () => {
    setChecked(!checked);
    props.onChange(checked, props.id);
  };

  useEffect(
    () => {
      setChecked(props.checked);
    },
    [inputRef]
  );

  return (
    <div>
      <label className={props.className} style={props.style}>
        <div
          className={cx("customCheck", {
            checkedTrue: checked,
            primary: props.primary,
            secondary: props.secondary
          })}
        />
        <input
          type="checkbox"
          ref={inputRef}
          defaultChecked={checked}
          value={props.value}
          name={props.name}
          id={props.id}
          className={props.className}
          onClick={toggleCheckBox}
          disabled={props.disabled}
        />
        {props.children}
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  style: PropTypes.object
};

export default CheckBox;
