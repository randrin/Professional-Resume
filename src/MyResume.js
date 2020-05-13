import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ButtonGoToTop from "../src/pages/inc/ButtonGoToTop";
import ScrollToTop from "../src/pages/inc/ScrollToTop";
import Routes from "../src/routers/routes";

function MyResume() {
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <ScrollToTop />
        <Route component={Routes} />
        <ButtonGoToTop />
      </BrowserRouter>
    </>
  );
}

export default MyResume;
