import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./TitleTextImage.module.css";

const TitleTextImage = (props) => {
  const { heading, text, image, page, alt } = props.data;
  const createMarkup = (val) => ({ __html: text });

  return (
    <section className={styles[page]}>
      <div className={styles.info}>
        <h3>{heading}</h3>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
      <div className={styles.image}>
        <img src={require("../../img/" + image)} alt={alt} />
      </div>
    </section>
  );
};

export default TitleTextImage;
