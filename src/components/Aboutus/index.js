import React from "react";
import PageIntro from "../PageIntro";
// import { iconsX } from "../../data/data.json";
import { brands, aboutPro, standOutAreas } from "../../data/data.json";
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

  const createMarkup = (val) => ({ __html: val });

  return (
    <article className={styles.container}>
      <div className={styles.Aboutus}>
        {/* <Link to={`/`}> */}
        <div className={styles.imgCont}>
          {/* // TODO: need headings for each page (About us ect) */}{" "}
          <PageIntro />
          {/* <heading>
            <h1 className={styles.title}>About Us</h1>
            <strong className={styles.intro}>
              Take the pain out of painting with Manly Warringah Painters
            </strong>
          </heading> */}
          {/* <div dangerouslySetInnerHTML={createMarkup(about)}></div> */}
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
          <h2>
            Manly Warringah Painters - Professional House Painters And
            Decorators
          </h2>
          <ul className={styles.icons}>
            {arr.map((val, i) => (
              <li key={i} className={styles.icon}>
                <FontAwesomeIcon icon={val.icon} />
                <span className={styles.iconText}>{val.title}</span>
              </li>
            ))}
          </ul>
          <p>
            <div dangerouslySetInnerHTML={createMarkup(aboutPro)}></div>
          </p>
          <p>
            <h4>
              A few of the areas Manly Warringah Painters stand out from the
              rest
            </h4>
            <ul className={styles.list}>
              {standOutAreas.map((val) => (
                <li>{val}</li>
              ))}
            </ul>
            <h4>Why choose us?</h4>
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
            </ul>
            FAQ's
            <div>
              <h1>Frequently Asked Questions</h1>
            </div>
            <div>
              Manly Warringah Painters Painting Process
              <p>
                <strong>
                  Manly Warringah Painters house painting process is designed to
                  be simple and effective for clients: CHANGE TEXT
                  https://www.thehousepainters.com.au/about/
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
                days. We have a large team of house painters around Melbourne,
                so you don't have to wait weeks or months like you do with many
                other painting businesses.
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
                &nbsp;or simply contact us for free colour consultation at your
                home today!
              </p>
            </div>
          </p>
        </div>
      </div>
    </article>

    // const test = (val) => {
    //   debugger;
    //   console.log(faGem);
    //   return o[val];

    //   // return eval(val);
    // };

    //   Exterior Painting
    // Interior Painting
    // Roofing
    // Colour Consult
    // Residential
    // Body Corporate
    // Government
    // School Painters
    // Render Repairs
    // Epoxy Flooring
    // Timber Deck Restoration

    // Anglicare garrison Morant healthcare Willara council

    //   const [category, setProduct] = useState([]);
    //   const [categories, setCategories] = useState({});

    //   On-time arrival
    // Timely completion
    // Attention to detail and care
    // Expert Colour Advice
    // Personalised Service
    //Satisfaction Guarantee
    // Fixed Price Guarantee
  );
};

export default Aboutus;
