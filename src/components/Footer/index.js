import React, { useEffect } from "react";
import SiteNav from "../SiteNav";
import { copyRight, webSiteBy } from "../../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

const Footer = () => {
  const createMarkup = (val) => ({ __html: val });

  useEffect(() => {
    var re2 = /comma|,/gi;
    const text = document.getElementById("test");
    if (text) {
      let str = text.innerText
        .replaceAll("*", "X")
        .replaceAll(re2, "<br /><br />");

      var mapObj = {
        sXXX: "shit",
        cXXX: "cunt",
        bXXXXXXX: "bullshit",
        bXXXX: "bitch",
        fXXXXXX: "fucking",
        fXXXXX: "fucker",
        wXXXX: "whore",
        fxxx: "fuck",
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
    <footer className={styles.container}>
      <nav>
        <SiteNav class="footer" />
        <a href="#top" className={styles.top}>
          <FontAwesomeIcon icon={faArrowCircleUp}>Back to top</FontAwesomeIcon>
        </a>
      </nav>
      <small className={styles.small}>{copyRight}</small>
      <small
        className={styles.small}
        dangerouslySetInnerHTML={createMarkup(webSiteBy)}
      ></small>

      <div id="test" className={styles.test}>
        <br />
        <br />
      </div>
    </footer>
  );
};

export default Footer;
