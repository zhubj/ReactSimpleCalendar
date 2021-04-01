import React from "react";
import ReactDOM from "react-dom";
import Index from "./App";
import "./styles.css";

function App() {
  return <Index />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
