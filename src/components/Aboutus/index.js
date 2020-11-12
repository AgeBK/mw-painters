import React from "react";
// import products from '../../data/products.json';
import styles from "./Aboutus.module.css";
import { Link } from "react-router-dom";

const Aboutus = () => {
  //   const [category, setProduct] = useState([]);
  //   const [categories, setCategories] = useState({});

  return (
    <div className={styles.container}>
      <div className={styles.Aboutus}>
        <Link to={`/`}>
          <div className={styles.imgCont}>
            ABOUT US
            {/* <img
              src={require("../../img/")}
              alt="TODO"
              className={styles.img}
            /> */}
                    <aside>
          <h2>Request a Painting Quote</h2>
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
              <li>
    
              </li>
              <li>
                http://www.manlywarringahpainters.com.au/ 0412 128 847
                alantaylor16@bigpond.com
              </li>
            </ul>
          </div>
        </aside>
          </div>
        </Link>
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
