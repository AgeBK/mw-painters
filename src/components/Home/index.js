import React from "react";
import Reviews from "../Reviews";
import { homeIntro, homeSpecialise, standOutAreas } from "../../data/data.json";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // TODO check Link vs anchors?

const Home = () => {
  const createMarkup = (val) => ({ __html: val });

  return (
    <div>
      <div className={styles.container}>
        {/* j&e Kogan based text */}
        {/* // TODO: map of areas mwp work and that over 25 years image and error page? */}
        {/* TODO: semantics are missing, SEO etc, check image 6 slideshow, anchors should be router links?*/}
        {/* // TODO: should cont Home be functionn home?? */}
        <h1>Manly Warringah Painters</h1>
        <strong className={styles.centre}>
          Delivering Strata, Commercial and Residential Painting Services for
          over 25 years
        </strong>
        <div
          className={styles.intro}
          dangerouslySetInnerHTML={createMarkup(homeIntro)}
        ></div>
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
                  <h2 dangerouslySetInnerHTML={createMarkup(val.title)}></h2>
                  <div dangerouslySetInnerHTML={createMarkup(val.text)}></div>
                </div>
              </div>
            </div>
          ))}
        </>
        <div className={styles.textContX}>
          <p>
            Although based on the Northern Beaches of Sydney, we provide our
            services to other areas in Sydney. Whether the job is small or
            large, Manly Warringah Painters have a range of options to cater for
            your needs. If you’re interested in a quote, just give us a call of
            fill out your details on our quote page.
          </p>
          <p>
            So for quality painting services, you can’t beat the experience,
            professionalism and personal attention of Manly Warringah Painters.
            We are ready to answer your questions about your painting needs.
            Please call us for a free, no obligation written estimate at ???
          </p>
        </div>
        <div>
          <h4>
            A few of the areas Manly Warringah Painters stand out from the rest
          </h4>
          <ul className={styles.standOutList}>
            {standOutAreas.map((val) => (
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.tick} />
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Home;
