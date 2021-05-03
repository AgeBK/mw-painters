import React from "react";
// import { iconsX } from "../../data/data.json";
import { about, brands, aboutPro, standOutAreas } from "../../data/data.json";
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

  // var o = { faGem, faThumbsUp, faPhoneVolume };

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
