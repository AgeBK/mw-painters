import React, { useState } from "react";
import emailjs from "emailjs-com";
import { successMsg, errorMsg } from "../../data/data.json";
import styles from "./ContactForm.module.css";
import ContactDetails from "../../components/ContactDetails";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    //emailjs
    // .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "user_LYMrkD2CRVAnRb1wdTtPk")

    emailjs
      .sendForm(
        "contact_service",
        "template_gayeg1b",
        e.target,
        "user_LYMrkD2CRVAnRb1wdTtPk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setMessage(successMsg);
        },
        (error) => {
          console.log(error.text);
          setMessage(errorMsg);
        }
      );
    // .then(e.target.reset());
  }

  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>
        <h2 className={styles.centre}>Contact Form</h2>
        <div
          className={`${success ? styles.success : styles.fail} ${styles.msg}`}
        >
          {message}
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Name" required />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email" required />
          <label>Phone</label>
          <input type="number" name="phone" placeholder="Phone" required />
          <label>Message</label>
          <textarea name="message" placeholder="Message" required />
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
        <ContactDetails class="contactForm" />
      </div>
    </div>
  );
};

export default ContactForm;
