import React, { useEffect } from "react";
import emailjs from "emailjs-com";

import styles from "./Footer.module.css";

const Footer = () => {
  // const ref = React.useRef();
  // // log on second render
  // // My name is Shubham, I work for  for the last 5 years.
  // console.log(ref);

  // https://stackoverflow.com/questions/53685140/how-to-change-button-text-in-reactjs

  // const handleClick = (event) => {
  //   alert(event.target.innerText); // Click Me
  //   alert(event.target.tagName); // BUTTON
  // };

  // useEffect(() => {
  //   // // Run! Like go get some data from an API.
  //   const text = document.getElementById("test");
  //   let str = text.innerText
  //     .replaceAll("*", "X")
  //     .replaceAll(",", "<br /><br />");
  //   console.log(str);
  //   var mapObj = {
  //     // sXXX: "slut",
  //     cXXX: "cunt",
  //     bXXXXXXX: "bullshit",
  //     bXXXX: "bitch",
  //     fXXXXXX: "fucking",
  //     fXXXXX: "fucker",
  //     fuk: "fuck",
  //   };

  //   console.log(Object.keys(mapObj));
  //   var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
  //   console.log(re);

  //   str = str.replace(re, function (matched) {
  //     return mapObj[matched];
  //   });
  //   console.log(str);

  //   text.innerHTML = str;
  //   // ul.innerText = str;
  // }, []);

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

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      {/* <input type="submit" value="Send" /> */}
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
};

// return (
//   <footer>
//     <div className={styles.container}></div>
//     <div id="test">
//       <br />
//       <br />

//     </div>

//     <div>

//     </div>
//   </footer>
// );
//};

export default Footer;
