import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data/data.json";

// import Slideshow from "../../components/Slideshow";
import Test from "../../components/Test";
import Slideshow from "../Slideshow";
import ContactDetails from "../../components/ContactDetails";

import styles from "./Nav.module.css";
import LogoImg from "../../img/mwpLogo.jpg";
import LogoNoPhne from "../../img/mwpLogoNoPhne.jpg";
import LogoLong from "../../img/mwpLogoLong.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  // const [isActive, setActive] = useState(false);
  const [open, setOpen] = useState("");

  const handleToggle = (val) => setOpen(open.length ? "" : styles.open);

  return (
    <header>
      <div className={styles.headerBar}></div>
      <div className={styles.topBar}>
        <div className={styles.logoCont}>
          <a href="/">
            {/* // TODO look up picture/source */}
            <picture>
              <source srcSet={LogoNoPhne} media="(max-width: 45rem)" />
              <img
                className={styles.logo}
                srcSet={LogoLong}
                alt="Manly Warringah Painters"
              />
            </picture>
            {/* <img
              src={LogoImg}
              // src={require("../../img/mwpLogoLong.jpg")}
              // src={require("../../img/mwpLogoNoPhne.jpg")}
              // src={require("../../img/mwpLogoSml.jpg")}
              // src={require("../../img/mwpLogoPhneRght2.jpg")}
              className={styles.logo}
              alt="Manly Warringah Painters"
              usemap="#imgmap"
            /> */}
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
              src={require("../../img/mwpLogoPhne.jpg")}
              className={styles.phoneImg}
              alt="Manly Warringah Painters"
              useMap="#imgmap"
            />
          </span>
        </div>

        {/* <FaPhoneVolume color="white" /> */}
        {/* <a href="tel:0412 128 847" className={styles.phone}>
          0412 128 847
        </a> */}
        <div
          onClick={handleToggle}
          className={`${styles.menuLink}  ${open}`} // TODO, have this twice, check semantics
        >
          <div className={styles.iconCont}>
            <div className={styles.icon}></div>
          </div>
        </div>
      </div>
      <ContactDetails class="contactNav" />
      {/* <h1 className={`${styles.heading}  ${open}`}>
          <Link to="/">
            <span>MANLY WARRINGAH</span> PAINTERS
          </Link>
        </h1> */}
      <div className={styles.navBar}></div>
      <nav id="menu" role="navigation" className={`${open}`}>
        <ul className={styles.main}>
          {nav.map((val, i) => (
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
      {/* </div> */}
    </header>
  );
};

export default Nav;
