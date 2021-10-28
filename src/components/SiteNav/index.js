import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data/data.json";
import styles from "./SiteNav.module.css";

const SiteNav = (props) => {
  const component = props.class;
  const handleToggle = props.click;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ul className={styles[component]}>
      {nav.map((val, i) => (
        <li key={i} className={styles.listItem} onClick={handleToggle}>
          <Link to={val.link}>{val.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SiteNav;
