import React from "react";
import { render } from "react-dom";
import App from "./App";
import Home from "./Home";
// import Dummy from "./Dummy";

const Index = () => (
  <div>
    <App />
  </div>
);

render(<Index />, document.getElementById("root"));
