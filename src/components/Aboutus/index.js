import React from "react";
import PageIntro from "../PageIntro";
import HeadingList from "../HeadingList";
import bedroom from "../../img/bedroom.jpg";
import bathroom from "../../img/bathroom.jpg";
import { brands, standOutAreas, accolades } from "../../data/data.json";
import styles from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <article className={styles.container}>
      <div className={styles.Aboutus}>
        <PageIntro />
        <h2>We only use the best quality products on all jobs</h2>
        <ul className={styles.brands}>
          {brands.map((val) => (
            <li>
              <img
                src={require("../../img/" + val)}
                className={styles.brand}
                alt={val.substr(0, val.indexOf("."))}
              />
            </li>
          ))}
        </ul>
        <HeadingList data={accolades} />
        <div className={styles.dblImg}>
          <img src={bedroom} alt="Manly Warringah Painting - bedroom" />
          <img src={bathroom} alt="Manly Warringah Painting - bathroom" />
        </div>
        <HeadingList data={standOutAreas} />
      </div>
    </article>
  );
};

export default Aboutus;
