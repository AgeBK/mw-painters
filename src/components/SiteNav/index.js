import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data/data.json";
import styles from "./SiteNav.module.css";
// TODO: Error page, semantics

const SiteNav = (props) => {
  const component = props.class;
  console.log("SiteNav:" + component);

  return (
    <ul className={styles[component]}>
      {nav.map((val, i) => (
        <li key={i} className={styles.listItem}>
          <Link to={val.link}>{val.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SiteNav;
