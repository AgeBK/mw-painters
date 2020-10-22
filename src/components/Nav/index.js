import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
// import { sortByName, saleItemsFirst, sortByPrice } from '../../utils';

const arr = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "about-us" },
  { name: "SERVICES", link: "services" },
  { name: "PROJECTS", link: "projects" },
  { name: "CONTACT US", link: "contact-us" },
];

const Nav = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = (val) => setActive(!isActive);

  return (
    <div className={styles.header}>
      <header>
        <h1 className={`${styles.heading}  ${isActive ? styles.open : ""}`}>
          <span>MANLY WARRINGAH</span> PAINTERS
        </h1>
        <nav
          id="menu"
          role="navigation"
          className={isActive ? `${styles.open}` : ""}
        >
          <ul className={styles.main}>
            {arr.map((val, i) => (
              <li key={i} className={styles.listItem}>
                <Link to={val.link} className={styles.productLink}>
                  {val.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={handleToggle}
          className={`${styles.menuLink}  ${isActive ? styles.open : ""}`} // TODO, have this twice
        >
          <div className={styles.icon}></div>
        </div>
      </header>
      <div className={styles.container}>
        <p>A responsive hamburger menu with flexbox.</p>
        <p>
          Works well. Only known issue is that the list is centered within it's
          flexbox. So, if "NAME" is 200px wide and the hamburger menu is 100px
          wide, the list will be off center when it expands. Quickest fix is to
          manually adjust the margin. This takes place on lines 53, 59, 60 and
          86. The same problem applies to the vertical margin as well. This hard
          codes a 50px offset, but if you had a large header then it would need
          adjusting.
        </p>
      </div>{" "}
      <div className={styles.imgCont}>
        <img
          src={require("../../img/img_b5.jpg")}
          className={styles.img}
          alt="TODO"
        />
      </div>
    </div>
  );
};

export default Nav;
