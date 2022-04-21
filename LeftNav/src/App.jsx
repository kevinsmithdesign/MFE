import React from "react";
import ReactDOM from "react-dom";

import LeftNav from './LeftNav';

import "./index.css";

const App = () => (
  <LeftNav />
);
ReactDOM.render(<App />, document.getElementById("app"));
