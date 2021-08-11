import React, { useEffect } from "react";

import styles from "./Footer.module.css";
// TODO: Error page

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

  useEffect(() => {
    // // Run! Like go get some data from an API.
    var re2 = /comma|,/gi;
    const text = document.getElementById("test");
    let str = text.innerText
      .replaceAll("*", "X")
      .replaceAll(re2, "<br /><br />");
    console.log(str);

    var mapObj = {
      // sXXX: "slut",
      cXXX: "cunt",
      bXXXXXXX: "bullshit",
      bXXXX: "bitch",
      fXXXXXX: "fucking",
      fXXXXX: "fucker",
      fuk: "fuck",
      // comma: ",",
    };

    console.log(Object.keys(mapObj));
    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
    console.log(re);

    str = str.replace(re, function (matched) {
      return mapObj[matched];
    });
    console.log(str);

    text.innerHTML = str;
    // ul.innerText = str;
  }, []);

  return (
    <footer>
      <div className={styles.container}></div>
      <div id="test">
        Scorpions good in a way to Rivoli my weaknesses and what I need your
        work on, let me introduce Delta comma Rachel Ross and Sam haraldur
        s****, kind of got this feeling that olgas waiting for me to man up my
        whole second interview bulshit thing say this is where I think I'm going
        bad if I don't man up there just waiting for the next Tyler does play
        this August thing falls through which it looks like it is slowly things
        to be looking pretty drive for a while, Captain Obvious those guys are
        seem to do good with the chicks I think they're really the best talk I
        just think I keep the conversation going tell a few stories the
        something going to work on big time, dema and Craig was straight doing
        that s*** Damo could have talked for another 10 hours and Craig probably
        not far off that, he brought no ammo to the Gun Show bro
        <br />
        <br />
      </div>
    </footer>
  );
};

export default Footer;
