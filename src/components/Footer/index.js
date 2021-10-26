import React, { useEffect } from "react";
import SiteNav from "../SiteNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import LogoSml from "../../img/mwpLogoSml.jpg";
import styles from "./Footer.module.css";
// TODO: Error page, semantics

const Footer = () => {
  useEffect(() => {
    var re2 = /comma|,/gi;
    const text = document.getElementById("test");
    if (text) {
      let str = text.innerText
        .replaceAll("*", "X")
        .replaceAll(re2, "<br /><br />");
      // console.log(str);

      var mapObj = {
        sXXX: "shit",
        cXXX: "cunt",
        bXXXXXXX: "bullshit",
        bXXXX: "bitch",
        fXXXXXX: "fucking",
        fXXXXX: "fucker",
        wXXXX: "whore",
        fuk: "fuck",
        // comma: ",",
      };

      // console.log(Object.keys(mapObj));
      var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
      // console.log(re);

      str = str.replace(re, function (matched) {
        return mapObj[matched];
      });
      // console.log(str);

      text.innerHTML = str;
      // ul.innerText = str;
    }
  }, []);

  return (
    <footer>
      <div className={styles.container}>
        <nav>
          {/* <img
            src={LogoSml}
            className={styles.logo}
            alt="Manly Warringah Painters"
          /> */}
          <SiteNav class="footer" />
          <a href="#top" className={styles.top}>
            <FontAwesomeIcon icon={faArrowCircleUp}>
              Back to top
            </FontAwesomeIcon>
          </a>
        </nav>
        {/* <div id="test" className={styles.test}>
          <br />
          <br />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
