import React from "react";
// import { iconsX } from "../../data/data.json";
import { about, brands } from "../../data/data.json";
import styles from "./Aboutus.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faPhoneVolume,
  faGem,
  // faCoffee,
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

  var o = { faGem, faThumbsUp, faPhoneVolume };

  const createMarkup = (val) => ({ __html: val });

  return (
    <div className={styles.container}>
      <div className={styles.Aboutus}>
        {/* <Link to={`/`}> */}
        <div className={styles.imgCont}>
          <h2 className={styles.title}>ABOUT US</h2>
          <div dangerouslySetInnerHTML={createMarkup(about)}></div>
          <div className={styles.brands}>
            {brands.map((val) => (
              <img
                src={require("../../img/" + val)}
                className={styles.brand}
                alt={val.substr(0, val.indexOf("."))}
              />
            ))}
          </div>
          <h2>Request a Painting Quote</h2>
          <ul className={styles.icons}>
            {arr.map((val, i) => (
              <li key={i} className={styles.icon}>
                <FontAwesomeIcon icon={val.icon} />
                <span className={styles.iconText}>{val.title}</span>
              </li>
            ))}
          </ul>

          <p>
            <div>
              <p>
                Talk To A Professional Painter, Not A Salesperson -{" "}
                <span>
                  <a href="tel:0412 128 847">0412 128 847</a>
                </span>
              </p>
            </div>
          </p>
          <p>
            <h4>
              A few of the areas Manly Warringah Painters stand out from the
              rest
            </h4>
            <ul className={styles.list}>
              <li>Over 25 years experience</li>
              <li>
                Reliable, local, established and fully insured tradespeople
              </li>
              <li>Industry leading workmanship using the finest products</li>
              <li>Experienced residential, commercial, strata painters</li>
              <li>Reputable, honest, professional and meticulous</li>
              <li>Proactive, regular updates on how the job is progressing</li>
              <li>No-fuss, get-the-job-done approach</li>
              <li>
                Over 80% of our new clientele come to us because of referrals
                from happy customers
              </li>
              <li>
                100% accountability – all projects are backed by a 5-year
                workmanship guarantee
              </li>
              <li>
                Dulux Accredited Painters who only use high-quality paint brands
              </li>
              <li>
                Committed to the highest safety standards and to keeping work
                areas clear of mess
              </li>
              <li>
                Careful with belongings; always clean the home after the project
                is finalised
              </li>
              <li>
                Focus on intensive preparation work to ensure interior and
                exterior painting work is excellent
              </li>
              <li>No hidden costs</li>
              <li>
                Free quotes, and work is started within just a few days of the
                go-ahead being given
              </li>
              <li>Cost Effective, Realistic Pricing</li>
              <li>Honest &amp; Professional Tradespeople</li>
              <li>Only The Best In Paints And Equipment</li>
              <li>We Take Pride In Our Work</li>
              <li>Dedicated To Providing Work Of The Highest Standards</li>
            </ul>
          </p>
        </div>
      </div>
    </div>

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
