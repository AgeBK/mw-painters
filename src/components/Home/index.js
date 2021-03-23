import React from "react";
import { homeIntro, homeSpecialise } from "../../data/data.json";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const createMarkup = (val) => ({ __html: val });

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <hr />
        <div className={styles.content}>
          {/* j&e Kogan based text */}
          {/* // TODO: map of areas mwp work and that over 25 years image and error page? */}
          {/* TODO: semantics are missing, SEO etc, check image 6 slideshow*/}
          <div dangerouslySetInnerHTML={createMarkup(homeIntro)}></div>
          <div className={styles.painting}>
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
                    <h2 dangerouslySetInnerHTML={createMarkup(val.title)}></h2>
                    <div dangerouslySetInnerHTML={createMarkup(val.text)}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>
            Although based on the Northern Beaches of Sydney, we provide our
            services to other areas in Sydney. If you’re interested in a quote,
            just give us a call of fill out your details on our quote page.
          </p>
          <p>
            So for quality painting services, you can’t beat the experience,
            professionalism and personal attention of Manly Warringah Painters.
            We are ready to answer your questions about your painting needs.
            Please call us for a free, no obligation written estimate at
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
