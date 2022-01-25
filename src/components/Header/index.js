import React, { useState } from "react";
import Slideshow from "../Slideshow";
import SiteNav from "../SiteNav";
import ContactDetails from "../ContactDetails";
import styles from "./Header.module.css";
import LogoNoPhne from "../../img/mwpLogoNoPhne.jpg";
import LogoLong from "../../img/mwpLogoLong.jpg";

const Header = () => {
  const [open, setOpen] = useState("");

  const handleToggle = (val) => setOpen(open.length ? "" : styles.open);

  return (
    <header className={styles.container}>
      <div className={styles.headerBar}></div>
      <div className={styles.topBar}>
        <div className={styles.logoCont}>
          <a href="/">
            <picture>
              <source srcSet={LogoNoPhne} media="(max-width: 45rem)" />
              <img
                className={styles.logo}
                srcSet={LogoLong}
                alt="Manly Warringah Painters"
              />
            </picture>
          </a>
          <map name="imgmap">
            <area
              target="_self"
              alt="Manly Warringah Painters"
              title="Manly Warringah Painters"
              href="tel:9972 0398"
              coords="0,0,151,24"
              shape="rect"
            ></area>
            <area
              target="_self"
              alt="Manly Warringah Painters"
              title="Manly Warringah Painters"
              href="tel:0412 128 847"
              coords="0,24,151,52"
              shape="rect"
            ></area>
          </map>
          <span className={styles.phone}>
            <img
              src={require("../../img/mwpNumbers.jpg")}
              alt="Manly Warringah Painters"
              className={styles.test2}
              useMap="#imgmap"
            />
          </span>
        </div>
        <div onClick={handleToggle} className={`${styles.menuLink}  ${open}`}>
          <div className={styles.iconCont}>
            <div className={styles.icon}></div>
          </div>
        </div>
      </div>
      <ContactDetails class="contactNav" />
      <div className={styles.navBar}></div>
      <nav className={`${open} ${styles.mainNav}`}>
        <SiteNav class="header" click={handleToggle} />
      </nav>
      <Slideshow />
    </header>
  );
};

export default Header;
