import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import products from './data/products.json';
// import Nav from "./components/Nav";
import MainContainer from "./containers/MainContainer";

import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

function App(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about-us">
          <Aboutus />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/faqs">
          <FAQs />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
export default MainContainer(App);
