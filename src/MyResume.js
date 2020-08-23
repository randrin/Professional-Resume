import React from "react";
import "./MyResume.scss";
import { BrowserRouter, Route } from "react-router-dom";
import ButtonGoToTop from "../src/components/pages/inc/ButtonGoToTop";
import ScrollToTop from "../src/components/pages/inc/ScrollToTop";
import Routes from "../src/routers/routes";
import { ResumeProvider } from "./context";

function MyResume() {
  return (
    <ResumeProvider>
      <BrowserRouter forceRefresh={true}>
        <ScrollToTop />
        <Route component={Routes} />
        <ButtonGoToTop />
      </BrowserRouter>
    </ResumeProvider>
  );
}

export default MyResume;
