import React from "react";
import PageIntro from "../PageIntro";
import TitleTextImage from "../TitleTextImage";
import HeadingList from "../HeadingList";

import { serviceAreas, serviceAreaImage, services } from "../../data/data.json";
import styles from "./Services.module.css";
// import { services } from "../../data/data.json";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller, faBrush } from "@fortawesome/free-solid-svg-icons";

// console.log(services.length);

const createMarkup = (val) => ({ __html: val });

const Services = () => {
  return (
    <article className={styles.container}>
      <PageIntro />
      <div>
        <HeadingList data={services} />
        {/* <p className={styles.servicesInfo}>
          If you’re after something that doesn't appear in the list above, don't
          hesitate to <a href="/contact-us">contact us</a> and we can probably
          cater to your needs, let us see what we can do for you.
        </p> */}
        <TitleTextImage data={serviceAreas} page="services" />
      </div>
    </article>
  );
};

export default Services;
