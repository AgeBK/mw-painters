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

  const createMarkup = (val) => ({ __html: val });

  return (
    <div className={styles.container}>
      <div className={styles.Aboutus}>
        {/* <Link to={`/`}> */}
        <div className={styles.imgCont}>
          {/* // TODO: need headings for each page (About us ect) */}
          <h1 className={styles.title}>ABOUT US</h1>
          <div dangerouslySetInnerHTML={createMarkup(about)}></div>
          <div className={styles.brands}>
            <h2>We only use the best quality products on all jobs</h2>
            {brands.map((val) => (
              <img
                src={require("../../img/" + val)}
                className={styles.brand}
                alt={val.substr(0, val.indexOf("."))}
              />
            ))}
          </div>
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
            <h3>Why choose us?</h3>
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
            <h3>FAQ's</h3>
            <div>
              <h1>Frequently Asked Questions</h1>
              <div>
                <ul>
                  <li>
                    <h3>
                      <strong>
                        Why should a customer hire you over another service
                        provider?
                      </strong>
                    </h3>
                    <p>
                      At Manly Warringah Painters we have over 25 years of
                      experience in a wide variety of painting and decorating
                      services. This means we can provide quality solutions to
                      problems easier, faster and cost effectively.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <strong>
                        Is there a particular aspect of your trade or industry
                        that you specialise in?
                      </strong>
                    </h3>
                    <p>
                      We specialise in interior and exterior house painting,
                      decorating, cladding, providing a high quality and cost
                      effective result for the client. We have over 25 years
                      experience
                    </p>
                  </li>
                  <li>
                    <h3>
                      <strong>
                        How do you normally charge for your service?
                      </strong>
                    </h3>
                    <p>
                      We provide a no obligation free quote for jobs and
                      projects that are well itemised based on an hourly rate
                      and materials required for the work required
                    </p>
                  </li>
                  <li>
                    <h3>
                      <strong>What makes your pricing competitive?</strong>
                    </h3>
                    <p>
                      We are fast and high effectient workers so you get real
                      value for money on any work done. Our painting services
                      are always done to a very high standard meaning no re-work
                      is needed and it will last for years to come. We have been
                      in the game a long time and have seen it all
                    </p>
                  </li>
                  <li>
                    <h3>
                      <strong>
                        How can a customer save money before you start the work?
                        Please give 3 tips
                      </strong>
                    </h3>
                    <p>
                      The job can be done more efficiently by clearing out rooms
                      and removing as much furniture as possible. We offer drop
                      sheets and furniture protection but making it easy to move
                      around means the job can be done faster and with less
                      aches and pains.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <strong>
                        What are the typical things that you need to know before
                        you can provide a quote to a customer?
                      </strong>
                    </h3>
                    <p>
                      We need to know room sizes, wall heights, current colours
                      on the walls. Dark colours being painted light will
                      generally need extra coats to come up perfect. An idea of
                      filling, repairing. Ceilings, skirtings, door frames,
                      doors, cornices. picture rails, outside areas. We Quote On
                      Site.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <strong>
                        Are you an insured business and do you guarantee your
                        work?
                      </strong>
                    </h3>
                    <p>
                      Yes we are insured with 5 million in liability which
                      covers property damage such as a paint tin getting knocked
                      onto carpet, or a TV being knocked over and smashed. We
                      Guarantee our work with 100% satisfaction and do a walk
                      through prior to payment. Any issues we will come back.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <strong>
                        What makes you the most reliable and trustworthy person
                        for the job?
                      </strong>
                    </h3>
                    <p>
                      At Manly Warringah Painters, our reputation is extremely
                      important to us and our business. We've been in business
                      for 25 years. Trust is something that is built up over a
                      long period of time. We can provide references and phone
                      numbers of past clients to get reviews.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <strong>What do you like most about your job?</strong>
                    </h3>
                    <p>
                      I enjoy two parts of my job. Doing the work and seeing a
                      transformation in a place and the more dramatic the
                      transformation, the more enjoyable. I also enjoy the
                      pleasure that owners get from a job well done through my
                      efforts.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3>Manly Warringah Painters Painting Process</h3>
              <p>
                <strong>
                  The House Painters house painting process is designed to be
                  simple and effective for clients: CHANGE TEXT
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
                Call <strong>The House Painters</strong> Team Today on
                <span>
                  <a href="tel:0412 128 847">0412 128 847</a>
                </span>
                or simply contact us for free colour consultation at your home
                today!
              </p>
            </div>
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
