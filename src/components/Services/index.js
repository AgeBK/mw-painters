import React from "react";
// import products from '../../data/products.json';
import styles from "./Services.module.css";
import { services } from "../../data/data.json";
import { Link } from "react-router-dom";

console.log(services);

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        <Link to={`/`}>
          <div className={styles.imgCont}>
            <h2>Services</h2>
            <ul>
              {services.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>
            {/* <img
              src={require("../../img/")}
              alt="TODO"
              className={styles.img}
            /> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
