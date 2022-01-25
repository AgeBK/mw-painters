import React from "react";
import { useLocation } from "react-router-dom";
import { pageIntro } from "../../data/data.json";
import styles from "./PageIntro.module.css";

const PageIntro = (props) => {
  console.log(props);

  const location = useLocation();
  const loc = location.pathname;
  const { heading, subHeading, text } = pageIntro[loc];
  const createMarkup = (val) => ({ __html: text });

  return (
    <section className={styles.pageIntro}>
      <hgroup>
        <h1>{heading}</h1>
        <h2>{subHeading}</h2>
      </hgroup>
      <section dangerouslySetInnerHTML={createMarkup()}></section>
    </section>
  );
};

export default PageIntro;
