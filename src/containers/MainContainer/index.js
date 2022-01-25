// @flow
import React from "react";
import styles from "./MainContainer.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainContainer = (WrappedComponent) => () =>
  (
    <>
      <Header />
      <main className={styles.container}>
        {/* App component is passed into MainContainer as WrappedComponent */}
        <div className={styles.contInner}>
          <WrappedComponent />
        </div>
      </main>
      <Footer />
    </>
  );

export default MainContainer;
