import React from "react";
import ReactDOM from "react-dom";
import CheckBox from "./checkbox/index.jsx";
import StripMessage from "./StripMessage/index.jsx";

import "./styles.css";

function App() {
  return (
    <div>
      <CheckBox id={2} onChange={() => {}} checked={true}>
        checkbox
      </CheckBox>
      <div className="App">
        <StripMessage
          onExpiry={() => {}}
          success
          expiry={3000}
          message={"stripMessage"}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
