import React from "react";
// import data from "./data/data.json";
import ContactForm from "../../components/ContactForm";
import styles from "./ContactUs.module.css";
// import { useForm } from "react-hook-form";

console.log(ContactForm);

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.test}>Contact Us</div>
      <div className={styles.contactCont}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
