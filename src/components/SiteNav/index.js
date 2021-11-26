import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink exact to={val.link} activeClassName={styles.active}>
            {val.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SiteNav;
