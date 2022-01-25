import React from "react";
import PageIntro from "../PageIntro";
import TitleTextImage from "../TitleTextImage";
import HeadingList from "../HeadingList";
import { serviceAreas, services } from "../../data/data.json";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <article className={styles.container}>
      <PageIntro />
      <div>
        <HeadingList data={services} />
        <TitleTextImage data={serviceAreas} page="services" />
      </div>
    </article>
  );
};

export default Services;
