import React from "react";
import {
  servicesIntro,
  serviceAreas,
  serviceAreaImage,
} from "../../data/data.json";
import styles from "./Services.module.css";
import { services } from "../../data/data.json";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller, faBrush } from "@fortawesome/free-solid-svg-icons";

// console.log(services.length);

const createMarkup = (val) => ({ __html: val });

const Services = () => {
  return (
    <div className={styles.container}>
      <h1>Services</h1>
      <strong className={styles.centre}>
        Manly Warringah Painter have over 25 years painting experience,
        delivering first class workmanship and competitive pricing.
      </strong>
      <div dangerouslySetInnerHTML={createMarkup(servicesIntro)}></div>
      <div>
        <p>
          {/* <img
                    className=""
                    title="TODO: CHECK IMAGE TITLE AND SIZES"
                    src="/wp-content/uploads/2014/12/Domestic.jpg"
                    alt="Manly Warringah Painters"
                    srcset="https://mcleanpainting.com.au/wp-content/uploads/2014/12/Domestic.jpg 758w, https://mcleanpainting.com.au/wp-content/uploads/2014/12/Domestic-300x103.jpg 300w"
                    sizes="(max-width: 758px) 100vw, 758px"
                  /> */}
        </p>
        <div>
          The experienced domestic and commerical painters on the Northern
          Beaches
        </div>
        <ul className={styles.services}>
          {services.map((val, i) => (
            <li key={i}>
              <FontAwesomeIcon icon={i % 2 ? faPaintRoller : faBrush} />
              {val}
            </li>
          ))}
        </ul>
        <p>
          If you’re after something that doesn't appear in the list above, don't
          hesitate to contact us and we can probably cater to your needs, let us
          see what we can do for you.
        </p>
        <h3>Service Areas</h3>
        <div dangerouslySetInnerHTML={createMarkup(serviceAreas)}></div>
        <div className={styles.serviceAreas}>
          <img
            src={require("../../img/" + serviceAreaImage)}
            className={styles.brand}
            alt="Manly Warringah Painters service areas"
          />
        </div>
        {/* <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106221.96597555731!2d151.18220056320723!3d-33.69765401795183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d55f0bda11bab%3A0xa012b517158bb83d!2sNorthern%20Beaches%20Council%2C%20NSW!5e0!3m2!1sen!2sau!4v1616543725018!5m2!1sen!2sau"
            // height="600"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            title="Google map"
            className={styles.iFrame}
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
