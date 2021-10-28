import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { pageIntro } from "../../data/data.json";
import styles from "./PageIntro.module.css";

const PageIntro = (props) => {
  console.log(props);

  const location = useLocation();
  console.log(location.pathname);
  const loc = location.pathname;
  console.log(pageIntro[loc]);

  return (
    <section>
      {/* <ul className={styles[component]}>
        {nav.map((val, i) => (
          <li key={i} className={styles.listItem} onClick={handleToggle}>
            <Link to={val.link}>{val.name}</Link>
          </li>
        ))} 
      </ul>*/}
    </section>
  );
};

export default PageIntro;
