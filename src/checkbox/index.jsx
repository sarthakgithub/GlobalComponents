import * as React from "react";
import cx from "classnames";
import { useState } from "react";
import "./style.css";

function CheckBox(props) {
  const [checked, setChecked] = useState(false);

  const toggleCheckBox = () => {
    setChecked(!checked);
    props.onChange(checked, props.id);
  };
  return (
    <div>
      <label className={props.className} style={props.style}>
        <div
          className={cx("customCheck", {
            checkedTrue: checked,
            checkedFalse: !checked
          })}
        />
        <input
          type="checkbox"
          value={props.value}
          name={props.name}
          className={props.className}
          onClick={toggleCheckBox}
          disabled={props.disabled}
        />
        {props.children}
      </label>
    </div>
  );
}
export default CheckBox;
