import React from "react";
import ReactDOM from "react-dom";
import CheckBox from "./checkbox/index.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <CheckBox id={2} onChange={() => {}}>
        checkbox
      </CheckBox>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
