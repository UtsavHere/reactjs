import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Helloworld from "./Helloworld";
import Subject from "./Subject";
import Dcf from "./Dcf";   

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <App />
      <Helloworld />
      <Subject />
      <Dcf />{" "}
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
