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
            <ul>
               <li>Interior &amp; Exterior Painting</li>
               <li>Residential Homes, Units &amp; Body Corporate</li>
               <li>Drywall And Plaster Repairs</li>
               <li>Architrave &amp; Skirting Board Painting</li>
               <li>Feature Wall Painting</li>
               <li>Plastering &amp; Cornice Work</li>
               <li>Wall &amp; Ceiling Painting</li>
               <li>New Properties, Restorations &amp; Renovations</li>
               <li>Repainting gutters, fascia and downpipes</li>
            </ul>
            <hr />

            <aside id="nav_menu-4" className="widget inner-padding widget_nav_menu">
               <h2 className="widget-title">Request a Painting Quote</h2>
               <div className="menu-request-quote-container">
                  <ul id="menu-request-quote" className="menu">
                     <li>
                        <a href="tel:0280743898">Call Now… <strong><i className="fa fa-phone"></i>  (02) 8074 3898</strong>
                        </a>
                     </li>
                     <li><a href="mailto:northernbeachespainting@gmail.com">todo@gmail.com </a></li>
                     <li>
                        <a href="https://housepaintersnorthernbeaches.com.au/contact/">Email and we’ll call you back</a>
                     </li>
                  </ul>
               </div>
            </aside>
            <hr />
            <footer className="site-info" itemType="https://schema.org/WPFooter" itemScope="">
               <div className="inside-site-info grid-container grid-parent">
                  <div className="copyright-bar">
                     <div className="lgc-column lgc-grid-parent lgc-grid-33 lgc-tablet-grid-33 lgc-mobile-grid-100 lgc-equal-heights  lgc-first" >
                        <div className="inside-grid-column"> </div>
                     </div>
                     <div className="lgc-column lgc-grid-parent lgc-grid-33 lgc-tablet-grid-33 lgc-mobile-grid-100 lgc-equal-heights " >
                        <div className="inside-grid-column">© 2020 <a href="/">House Painters Northern Beaches</a>.  All rights reserved.</div>
                     </div>
                     <div className="lgc-column lgc-grid-parent lgc-grid-33 lgc-tablet-grid-33 lgc-mobile-grid-100 lgc-equal-heights  lgc-last">
                        <div className="inside-grid-column">
                           <div>
                              <a href="/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a> | <a href="/terms-of-use/" target="_blank" rel="noopener">Terms of Use</a>
                           </div>
                        </div>
                     </div>
                     <div className="lgc-clear"></div>
                  </div>
               </div>
            </footer>
         </div></div>

   )
};

export default Home;
