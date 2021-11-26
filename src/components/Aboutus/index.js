import React from "react";
import PageIntro from "../PageIntro";
import HeadingList from "../HeadingList";
import bedroom from "../../img/bedroom.jpg";
import bathroom from "../../img/bathroom.jpg";

// import { iconsX } from "../../data/data.json";
import {
  brands,
  aboutPro,
  standOutAreas,
  accolades,
} from "../../data/data.json";
import styles from "./Aboutus.module.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faHome,
  faBuilding,
  faUserFriends,
  faCertificate,
  faClock,
  faAward,
  faStar,
  faPeopleArrows,
  faCommentDollar,
  faDollarSign,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

//TODO: JSON.parse(Aboutus);
const Aboutus = () => {
  var arr = [
    { title: "Over 25 years experience", icon: faMedal },
    { title: "Interior and exterior", icon: faHome },
    { title: "Commercial, residential", icon: faBuilding },
    { title: "Reliable and honest", icon: faUserFriends },
    { title: "Licensed and insured", icon: faCertificate },
    { title: "Timely completion", icon: faClock },
    { title: "Expert colour advice", icon: faAward },
    { title: "Satisfaction gaurantee", icon: faStar },
    { title: "Personalised service", icon: faPeopleArrows },
    { title: "Value for money", icon: faCommentDollar },
    { title: "Fixed price", icon: faDollarSign },
    { title: "Best products available", icon: faTrophy },
  ];

  var arr2 = [
    { title: "Over 25 years experience", icon: "faMedal" },
    { title: "Interior and exterior", icon: "faHome" },
    { title: "Commercial, residential", icon: "faBuilding" },
    { title: "Reliable and honest", icon: "faUserFriends" },
    { title: "Licensed and insured", icon: "faCertificate" },
    { title: "Timely completion", icon: "faClock" },
    { title: "Expert colour advice", icon: "faAward" },
    { title: "Satisfaction gaurantee", icon: "faStar" },
    { title: "Personalised service", icon: "faPeopleArrows" },
    { title: "Value for money", icon: "faCommentDollar" },
    { title: "Fixed price", icon: "faDollarSign" },
    { title: "Best products available", icon: "faTrophy" },
  ];

  console.log(arr2);

  const createMarkup = (val) => ({ __html: val });

  return (
    <article className={styles.container}>
      <div className={styles.Aboutus}>
        <PageIntro />
        <h2>We only use the best quality products on all jobs</h2>
        <ul className={styles.brands}>
          {brands.map((val) => (
            <li>
              <img
                src={require("../../img/" + val)}
                className={styles.brand}
                alt={val.substr(0, val.indexOf("."))}
              />
            </li>
          ))}
        </ul>
        <HeadingList data={accolades} />
        {/* <div dangerouslySetInnerHTML={createMarkup(aboutPro)}></div> */}
        <div className={styles.dblImg}>
          <img src={bedroom} alt="Manly Warringah Painting - bedroom" />
          <img src={bathroom} alt="Manly Warringah Painting - bathroom" />
        </div>
        <HeadingList data={standOutAreas} />
        {/* // TODO: don't need this below?? */}
        {/* <h4>Why choose us?</h4>
          <ul>
            <li>Upfront quotes</li>
            <li>Quality paints</li>
            <li>We pass on the paint savings</li>
            <li>Attention to detail</li>
            <li>Make it easy</li>
            <li>Friendly</li>
            <li>Fast and Efficient</li>
            <li>Clean</li>
            <li>Excellence</li>
            <li>Award winning workmanship</li>
          </ul> */}
        {/* <div>
              Manly Warringah Painters Painting Process
              <p>
                <strong>
                  Manly Warringah Painters house painting process is designed to
                  be simple and effective for clients:
                  <br />
                  <br />
                  <a href="/">
                    NEED TO CHANGE BELOW TEXT IF KEEPING? -
                    https://www.thehousepainters.com.au/about/
                  </a>
                </strong>
              </p>
              <p>
                <strong>Step 1</strong> - Book in a free quote. Whether you're
                after interior house painting or exterior house painting, simply
                call us or send a query via our Contact Form and we will
                organise one of our workers to come out to your property to take
                a look at what's required, and answer any questions you may have
                at the time.
              </p>
              <p>
                <strong>Step 2</strong> - Once you've accepted our estimate, we
                will schedule your job in. Most projects start within only 2-3
                days. We have a large team of house painters around the Northern
                Beaches, so you don't have to wait weeks or months like you do
                with many other painting businesses.
              </p>
              <p>
                <strong>Step 3</strong> - After we have finished painting your
                interior and/or exterior areas, you evaluate the job. We always
                want our customers to be blown away by our work, so if you're
                not 100% satisfied with your new paintwork, let us know and we
                will work with you until you're satisfied.
              </p>
              <p>
                <strong>Step 4</strong> - When we know the project has been
                finalised, we get to work on the cleanup stage. We clean your
                home and exterior job site to get everything spick and span. We
                remove any dirt and/or stains that have come about through our
                work.
              </p>
              <p>
                Call <strong>Manly Warringah Painters</strong> Today on&nbsp;
                <span>
                  <a href="tel:0412 128 847">0412 128 847</a>
                </span>
                &nbsp;or simply <a href="/contact-us">contact us</a> for free
                colour consultation at your home today!
              </p>
            </div> */}
      </div>
    </article>
  );
};

export default Aboutus;
