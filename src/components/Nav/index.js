import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Slideshow from "../../components/Slideshow";
import Test from "../../components/Test";
import Slideshow from "../Slideshow";

import styles from "./Nav.module.css";
// import { sortByName, saleItemsFirst, sortByPrice } from '../../utils';

const navArr = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "about-us" },
  { name: "SERVICES", link: "services" },
  { name: "PROJECTS", link: "projects" },
  { name: "CONTACT US", link: "contact-us" },
];

const Nav = () => {
  // const [isActive, setActive] = useState(false);
  const [open, setOpen] = useState("");

  const handleToggle = (val) => setOpen(open.length ? "" : styles.open);

  return (
    <div className={styles.header}>
      <div className={styles.topBar}>
        <a href="tel:0400 000 000" className={styles.phone}>
          0400 000 000</a>
      </div>

      <header>
        <h1 className={`${styles.heading}  ${open}`}>
          <Link to="/">
            <span>MANLY WARRINGAH</span> PAINTERS
          </Link>
        </h1>
        <nav id="menu" role="navigation" className={`${open}`}>
          <ul className={styles.main}>
            {navArr.map((val, i) => (
              <li key={i} className={styles.listItem}>
                <Link to={val.link} className={styles.productLink}>
                  {val.name}
                </Link>
              </li>
            ))}
            {/* <li className={styles.listItem}>
              <a href="tel:0400 000 000" className={styles.phone}>
                0400 000 000</a>
            </li> */}
          </ul>
        </nav>
        <div
          onClick={handleToggle}
          className={`${styles.menuLink}  ${open}`} // TODO, have this twice
        >
          <div className={styles.icon}></div>
        </div>
      </header>
      {/* <div className={styles.container}>
        <p>A responsive hamburger menu with flexbox.</p>
        <div>https://react-slideshow.herokuapp.com/</div>
        <p>
          Works well. Only known issue is that the list is centered within it's
          flexbox. So, if "NAME" is 200px wide and the hamburger menu is 100px
          wide, the list will be off center when it expands. Quickest fix is to
          manually adjust the margin. This takes place on lines 53, 59, 60 and
          86. The same problem applies to the vertical margin as well. This hard
          codes a 50px offset, but if you had a large header then it would need
          adjusting.
        </p>
      </div> */}
      <Slideshow />
    </div>
  );
};

export default Nav;
