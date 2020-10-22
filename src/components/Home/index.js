import React from "react";
// import products from '../../data/products.json';
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  //   const [category, setProduct] = useState([]);
  //   const [categories, setCategories] = useState({});

  return (
    <div className={styles.container}>
      <div className={styles.home} Home>
        <Link to={`/`}>
          <div className={styles.imgCont}>
            Home
            {/* <img
              src={require("../../img/")}
              alt="TODO"
              className={styles.img}
            /> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
