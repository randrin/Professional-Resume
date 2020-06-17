import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import MyResume from "./MyResume";
import "./i18next";

ReactDOM.render(
  <Suspense fallback={<span className="slider-loader"></span>}>
    <MyResume />
  </Suspense>,
  document.getElementById("my_resume")
);
