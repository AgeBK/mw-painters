import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import products from './data/products.json';
// import Nav from "./components/Nav";
import MainContainer from "./containers/MainContainer";

import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import ContactUs from "./pages/ContactUs";
// import Product from "./components/Product";
// import Test from "./components/Test";
import styles from "./App.module.css";

// let categories = {};

function App(props) {
  return (
    <div>
      {/* <div className={styles.appHeader}>{path !== '/' && <Nav />}</div> */}
      {/* {loading ? (
          <div className={styles.centerScreen}>
            <img src={require("./img/loader.gif")} alt="loader" />
          </div>
        ) : ( */}
      <div className={styles.container}>
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
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
          {/* <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about-us" render={() => <Aboutus />} />
          <Route exact path="/services" render={() => <Services />} /> */}
          {/* <Route
            exact
            path="/test"
            render={() => <Test products={["apple", "cherry", "banana"]} />}
          />
          <Route
            exact
            path="/:id"
            render={(props) => <FilteredCats {...props} />}
          />
          <Route
            exact
            path="/:id/:id"
            render={(props) => <Product {...props} />}
          /> */}
        </Switch>
      </div>
    </div>
  );
}
export default MainContainer(App);
