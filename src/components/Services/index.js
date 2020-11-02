import React from "react";
// import products from '../../data/products.json';
import styles from "./Services.module.css";
import { Link } from "react-router-dom";

const Services = () => {
  //   const [category, setProduct] = useState([]);
  //   const [categories, setCategories] = useState({});

  return (
    <div className={styles.container}>
      <div className={styles.Services}>
        <Link to={`/`}>
          <div className={styles.imgCont}>
            Services
            {/* <img
              src={require("../../img/")}
              alt="TODO"
              className={styles.img}
            /> */}
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

export default Services;
