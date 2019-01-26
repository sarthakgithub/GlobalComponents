import * as React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import "./style.css";

function StripMessage(props) {
  let timer = null;
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  const setMessageWithExpiry = (message, expiry) => {
    clearTimer();
    timer = setTimeout(onExpiry, expiry);
  };

  const onExpiry = () => {
    setMessage("");
    props.onExpiry();
  };

  const clearTimer = () => {
    if (timer !== null) clearTimeout(timer);
  };

  useEffect(
    () => {
      setMessage(props.message);
      setMessageWithExpiry(props.message, props.expiry);
      return function cleanup() {
        clearTimer();
      };
    },
    [inputRef]
  );

  return message ? (
    <div className={"stripMessage"} ref={inputRef}>
      <div
        className={cx("content", {
          success: props.success,
          failed: !props.success
        })}
      >
        {props.message}
      </div>
    </div>
  ) : null;
}

StripMessage.defaultProps = {
  success: false,
  onExpiry: () => {},
  expiry: 3000
};

StripMessage.propTypes = {
  success: PropTypes.bool,
  className: PropTypes.string,
  message: PropTypes.node,
  expiry: PropTypes.number,
  onExpiry: PropTypes.func
};

export default StripMessage;
