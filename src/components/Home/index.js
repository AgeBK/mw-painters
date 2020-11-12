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
        <h2>Manly Warringah Painters</h2>
        <hr />
        <p>
          Established in 1995 on the northern beaches,we are an award winning
          small team ,experienced in exterior and interior painting ,licensed
          ,insured and competitively priced,so for an obligation free quote give
          Alan a call on 0412 128 847
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Home;
