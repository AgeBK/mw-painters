import React from "react";
import Reviews from "../Reviews";
import PageIntro from "../PageIntro";
import ContactForm from "../../components/ContactForm";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <article className={styles.container}>
      <PageIntro />
      <div className={styles.contactCont}>
        <ContactForm />
      </div>
      <Reviews />
    </article>
  );
};

export default ContactUs;
