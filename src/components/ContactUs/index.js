import React from "react";
import Reviews from "../Reviews";
import { about, brands, aboutPro, standOutAreas } from "../../data/data.json";
import ContactForm from "../../components/ContactForm";
import styles from "./ContactUs.module.css";
// import { useForm } from "react-hook-form";

// console.log(ContactForm);

const ContactUs = () => {
  return (
    <article className={styles.container}>
      <h1>Contact Us</h1>
      <h2 className={styles.intro}>
        For expert advice or to get a free quote please fill out the form, email
        or phone us.
      </h2>
      {/* <h2 className={styles.header}>Contact form</h2> */}
      <div className={styles.contactCont}>
        <ContactForm />
      </div>
      <Reviews />
    </article>
  );
};

export default ContactUs;
