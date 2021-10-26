import React, { useState } from "react";

// import Slideshow from "../../components/Slideshow";
import Test from "../../components/Test";
import Slideshow from "../Slideshow";
import SiteNav from "../SiteNav";
import ContactDetails from "../../components/ContactDetails";

import styles from "./Nav.module.css";
import LogoImg from "../../img/mwpLogo.jpg";
import LogoNoPhne from "../../img/mwpLogoNoPhne.jpg";
import LogoLong from "../../img/mwpLogoLong4.png";
import LogoLong2 from "../../img/mwpLogoLong.jpg";
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
              src={require("../../img/test4.png")}
              // className={styles.phoneImg} Todo: text in logo image seems to dark after resizing ??
              alt="Manly Warringah Painters"
              className={styles.test2}
              useMap="#imgmap"
            />
          </span>
        </div>
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
      <div className={styles.navBar}></div>
      <nav id="menu" role="navigation" className={`${open}`}>
        <SiteNav />
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
