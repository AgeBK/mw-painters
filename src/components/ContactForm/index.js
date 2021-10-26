import React from "react";
import emailjs from "emailjs-com";

// import products from '../../data/products.json';
import styles from "./ContactForm.module.css";
// import { useForm } from "react-hook-form";
import ContactDetails from "../../components/ContactDetails";

const ContactForm = () => {
  // const { register, errors, handleSubmit, reset } = useForm();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  // const onSubmit = async (data) => {
  //   console.log("Name: ", data.name);
  //   console.log("Email: ", data.email);
  //   console.log("Subject: ", data.subject);
  //   console.log("Message: ", data.message);
  // };

  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>
        <h2>Get in touch with us</h2>
        <p>
          If you'd like to arrange an obligation free quote and expert advice,
          please fill out the form, email or phone us
        </p>
        <form className="contact-form" onSubmit={sendEmail}>
          {/* <input type="hidden" name="contact_number" placeholder="" /> */}
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
      </div>
      <div className={styles.contactFormX}>
        <ContactDetails class="contactForm" />
      </div>
    </div>
  );
};

export default ContactForm;
