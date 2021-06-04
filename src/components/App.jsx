import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function renderConditionally() {
  return isLoggedIn === true ? <h1>Hello</h1> : <Login />;
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
