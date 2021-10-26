import React from "react";
import styles from "./ContactDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const contactDetails = (props) => {
  console.log("XXXXX");
  console.log(props);

  // nav and contact form use this component
  const component = props.class;

  return (
    <div className={styles[component]}>
      <h2 className={styles.centre}>Contact Details</h2>
      <div className={styles.contactNo}>
        <a href="tel:9972 0398" className={styles.land}>
          <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
          <span> 9972 0398</span>
        </a>
        <a href="tel:0412 128 847" className={styles.mob}>
          <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
          <span> 0412 128 847</span>
        </a>
        <a href="mailto:alantaylor16@bigpond.com" target="_self">
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <span>alantaylor16@bigpond.com</span>
        </a>
      </div>
    </div>
  );
};

export default contactDetails;
