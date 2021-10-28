import React from "react";
import { about, brands, aboutPro, standOutAreas } from "../../data/data.json";
import ContactForm from "../../components/ContactForm";
import styles from "./ContactUs.module.css";
// import { useForm } from "react-hook-form";

// console.log(ContactForm);

const ContactUs = () => {
  return (
    <article className={styles.container}>
      <h1>Contact Us</h1>
      <strong className={styles.intro}>
        For expert advice or to get a free quote please fill out the form, email
        or phone us.
      </strong>
      {/* <h2 className={styles.header}>Contact form</h2> */}
      <div className={styles.contactCont}>
        <ContactForm />
      </div>
    </article>
  );
};

export default ContactUs;
