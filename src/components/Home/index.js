import React from "react";
// import products from '../../data/products.json';
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  //   const [category, setProduct] = useState([]);
  //   const [categories, setCategories] = useState({});

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <hr />
        <div className={styles.intro}>
          {/* j&e Kogan based text */}
          <h1>Manly Warringah Painters</h1>
          <strong>
            Delivering Strata, Commercial and Residential Painting Services for
            over 25 years
          </strong>
          <p>
            Manly Warringah Painters were established on the Northern Beaches in
            1995 by Alan Taylor and Frank Edwards and still going strong today.
            We are experienced in all types of painting and painted finishes.
            Alan and Frank provide a friendly, professional service at a very
            competitive price.
            {/* Please call us today for an obligation free quote */}
          </p>
          <p>
            As painting professionals we’re happy to quote on any size job. We
            have painters on staff to service the largest commercial project,
            but willingly undertake smaller jobs. Despite the company expanding
            to its current formidable size, we have consciously maintained our
            core ethos of offering a personalised and informed service to all
            our clients.
          </p>
          <p>
            Although based on the Northern Beaches of Sydney, we provide our
            services to other areas in Sydney. If you’re interested in a quote,
            just give us a call of fill out your details on our quote page.
          </p>
          <p>
            So for quality painting services, you can’t beat the experience,
            professionalism and personal attention of Manly Warringah Painters.
          </p>
        </div>
        <p>
          {/* Established in 1995 on the northern beaches,we are an award winning
          small team ,experienced in exterior and interior painting ,licensed
          ,insured and competitively priced,so for an obligation free quote give
          Alan a call on 0412 128 847 */}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Home;
