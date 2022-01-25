import React from "react";
import Reviews from "../Reviews";
import PageIntro from "../PageIntro";
import HeadingList from "../HeadingList";
import TitleTextImage from "../TitleTextImage";
import {
  homeSpecialise,
  standOutAreas,
  serviceAreas,
} from "../../data/data.json";
import styles from "./Home.module.css";

const Home = () => {
  const createMarkup = (val) => ({ __html: val });

  return (
    <>
      <article className={styles.container}>
        <div className={styles.textBlock}>
          <PageIntro />
        </div>
        <>
          {homeSpecialise.map((val, i) => (
            <div key={i} className={styles.paintCont}>
              <div className={styles.imgCont}>
                <img
                  src={require("../../img/" + val.image)}
                  alt="Manly Warringah Painting"
                />
              </div>
              <div className={styles.textCont}>
                <div className={styles.textInner}>
                  <h3 dangerouslySetInnerHTML={createMarkup(val.title)}></h3>
                  <div dangerouslySetInnerHTML={createMarkup(val.text)}></div>
                </div>
              </div>
            </div>
          ))}
        </>
        <div className={styles.textBlock}>
          <TitleTextImage data={serviceAreas} page="services" />
          <HeadingList data={standOutAreas} />
        </div>
      </article>
      <Reviews />
    </>
  );
};

export default Home;
