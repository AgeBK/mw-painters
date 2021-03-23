import React from "react";
// import products from '../../data/products.json';
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import ContactDetails from "../../components/ContactDetails";

const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log("Name: ", data.name);
    console.log("Email: ", data.email);
    console.log("Subject: ", data.subject);
    console.log("Message: ", data.message);
  };

  return (
    <div className="XXXXX">
      <ContactDetails className="contactForm" />
      <div className={styles.contactForm}>
        <form id="contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className={styles.row}>
            <div className={styles.tb}>
              <input
                type="text"
                name="your name"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className={styles.formInput}
                // className="form-control formInput" // TODO is this for the control to work
                placeholder="Name"
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
            <div className={styles.tb}>
              <input
                type="tel"
                name="phone"
                // ref={register({
                //   required: true,
                //   pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                // })}
                // className="form-control formInput" // TODO is this for the control to work
                className={styles.formInput}
                placeholder="Phone number"
              ></input>
              {errors.phone && (
                <span className="errorMessage">
                  Please enter a valid phone address
                </span>
              )}
            </div>
            <div className={styles.tb}>
              <input
                type="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className={styles.formInput}
                // className="form-control formInput" // TODO is this for the control to work
                placeholder="Email address"
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
            </div>
            {/* Row 2 of form */}
            {/* <div className={styles.tb}>
          <input
            type="text"
            name="subject"
            ref={register({
              required: {
                value: true,
                message: "Please enter a subject",
              },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            className={styles.formInput}
            // className="form-control formInput" // TODO is this for the control to work
            placeholder="Subject"
          ></input>
          {errors.subject && (
            <span className="errorMessage">{errors.subject.message}</span>
          )}
        </div> */}
          </div>
          {/* Row 3 of form */}
          <div className={styles.row}>
            <div className={styles.ta}>
              <textarea
                rows={3}
                name="message"
                ref={register({
                  required: true,
                })}
                className={styles.formInput}
                // className="form-control formInput" // TODO is this for the control to work
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
            </div>
            <button className={styles.submit} type="submit">
              Submit Message
            </button>
            {/* <div className={styles.test}>
          <div className={styles.test2}>XXX</div>
        </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
