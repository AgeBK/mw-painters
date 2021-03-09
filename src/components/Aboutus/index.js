import React from "react";
import { icons } from "../../data/data.json";
import styles from "./Aboutus.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faPhoneVolume,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

console.log(icons);

const Aboutus = () => {
  //   const [category, setProduct] = useState([]);
  //   const [categories, setCategories] = useState({});

  return (
    <div className={styles.container}>
      <div className={styles.Aboutus}>
        {/* <Link to={`/`}> */}
        <div className={styles.imgCont}>
          ABOUT US
          {/* <img
              src={require("../../img/")}
              alt="TODO"
              className={styles.img}
            /> */}
          <aside>
            <h2>Request a Painting Quote</h2>

            <ul className={styles.icons}>
              {/* <li className={styles.listItem}>
              <a href="tel:0400 000 000" className={styles.phone}>
                0400 000 000</a>
            </li> */}
            </ul>

            <p>
              Don't worry, we have never used subcontracters, so you can be
              assured that the painters that arrive at your place will be the
              owner operators. This guarantees that the job is done properly,
              using the best materials in a timely fashion. All our work is
              guaranteed. When you go with Manly Warringah Painters, you can be
              assured top quality work in a timely fashion
            </p>
            <p>
              <div>
                <p>
                  Talk To A Professional Painter, Not A Salesperson -{" "}
                  <span>
                    <a href="tel:+61401635451">0401 635 451</a>
                  </span>
                </p>
                <p>
                  If it’s a friendly and professional painting and decorating
                  service that you’re in need of, then look no further! At Manly
                  Warringah Painters we’re proud to offer our clients no less
                  than 25 years of experience, which when paired with our
                  enthusiastic approach to all projects and our incredible level
                  of expertise; allows us to offer world class results with an
                  affordable price tag.
                </p>
                <p>
                  What really makes us unique is our skill set, the quality of
                  our work and our willingness to help. We’re not a faceless
                  corporation that focuses on output and profits; we genuinely
                  care about giving you the <strong>best results</strong> from a
                  friendly, local expert that you can trust.
                </p>
                <p>
                  If you would like to book our services, or you’d like to
                  simply make an inquiry – don’t hesitate to get in touch with
                  us right now! We’re always on hand to help, so let us take
                  care of the hard work while you simply enjoy the results.
                </p>
              </div>
            </p>
            <p>
              <h4>
                A few of the areas Manly Warringah Painters stand out from the
                rest
              </h4>
              <ul className={styles.list}>
                <li>25 years experience</li>
                <li>
                  Reliable, local, established and fully insured tradespeople
                </li>
                <li>Industry leading workmanship using the finest products</li>
                <li>Experienced residential, commercial, strata painters</li>
                <li>Reputable, honest, professional and meticulous</li>
                <li>
                  Proactive, regular updates on how the job is progressing
                </li>
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
                  Dulux Accredited Painters who only use high-quality paint
                  brands
                </li>
                <li>
                  Committed to the highest safety standards and to keeping work
                  areas clear of mess
                </li>
                <li>
                  Careful with belongings; always clean the home after the
                  project is finalised
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
            <div className={styles.services}>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <h3>High-Quality Interior and Exterior Painters</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/sticker.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/sticker.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/sticker-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>18 Years’ Experience</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/clock.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/clock.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/clock-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Punctual, Neat and Courteous</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/interior.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/interior.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/interior-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Interior and Exterior</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/mall.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/mall.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/mall-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Commercial and Residential</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/magic-lamp.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/magic-lamp.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/magic-lamp-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Personalised Service</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/car.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/car.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/car-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Up-to-date Technology</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/diamond.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/diamond.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/diamond-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Premium Product Range</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/testimonial.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/testimonial.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/testimonial-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Professional Painters</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/license.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/license.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/license-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Fully licensed, Registered and Insured</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/smiley.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/smiley.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/smiley-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Satisfaction Guarantee</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/diamond-1.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/diamond-1.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/diamond-1-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>We offer Value</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>
                            <img
                              src="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/love.png"
                              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw"
                              srcset="https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/love.png 512w, https://aquapaintingsydney.com.au/wp-content/uploads/2020/08/love-480x480.png 480w"
                              alt=""
                              width="512"
                              height="512"
                            />
                          </span>
                        </div>
                        <div>
                          <h4>Friendly Service</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <a
                        href="#get-a-quote"
                        data-icon="$"
                        data-et-has-event-already="true"
                      >
                        Get a quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul>
                <li>
                  <a href="tel:0280743898">
                    Call Now…
                    <strong>
                      <i></i> (02) 8074 3898
                    </strong>
                  </a>
                </li>
                <li>
                  <a href="mailto:northernbeachespainting@gmail.com">
                    todo@gmail.com{" "}
                  </a>
                </li>
                <li>
                  <a href="https://housepaintersnorthernbeaches.com.au/contact/">
                    Email and we’ll call you back
                  </a>
                </li>
                <li></li>
                <li>
                  http://www.manlywarringahpainters.com.au/ 0412 128 847
                  alantaylor16@bigpond.com
                </li>
              </ul>
            </div>
          </aside>
        </div>
        {/* </Link> */}
      </div>
    </div>
    // <div className={styles.container}>
    //   {Object.entries(categories).map(([key, value]) => {
    //     const category = key.toLowerCase().replace(/ /gi, "-");
    //     return (
    //       <div key={category} className={styles.category}>
    //         <Link to={`/${category}`}>
    //           <div className={styles.imgCont}>
    //             <img
    //               src={require("../../img/" + value)}
    //               alt={category}
    //               className={styles.img}
    //             />
    //           </div>
    //         </Link>
    //         <Link to={`/${category}`} className={styles.link}>
    //           {key}
    //         </Link>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Aboutus;
