import React from "react";
// import products from '../../data/products.json';
import styles from "./Services.module.css";
import { services } from "../../data/data.json";
import { Link } from "react-router-dom";

console.log(services);

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        <div>
          <div>
            <div>
              <div>
                <h1>The experienced domestic painters in Melbourne</h1>
              </div>
              <div>
                <p>
                  <img
                    className=""
                    title="TODO: CHECK IMAGE TITLE AND SIZES"
                    src="/wp-content/uploads/2014/12/Domestic.jpg"
                    alt="Manly Warringah Painters"
                    srcset="https://mcleanpainting.com.au/wp-content/uploads/2014/12/Domestic.jpg 758w, https://mcleanpainting.com.au/wp-content/uploads/2014/12/Domestic-300x103.jpg 300w"
                    sizes="(max-width: 758px) 100vw, 758px"
                  />
                </p>
                <h2>
                  Enhance your home with our domestic painters in Melbourne
                </h2>
                <p>
                  When you’re ready to change up your home with a fresh coat of
                  paint, choose the most reliable has to offer: McLean Painting.
                  Our team is made up of experienced and professional domestic
                  painters who are qualified to do the job to an incredibly high
                  quality. Each one can boast years of proudly working in the
                  industry, giving McLean over 100 years of combined experience.
                </p>
                <p>
                  All of this experience adds up to a group of very skilled
                  painters who can take on any job in any home. Some of our
                  previous work includes:
                </p>
                <h2>Services</h2>
                <ul>
                  {services.map((val, i) => (
                    <li key={i}>{val}</li>
                  ))}
                </ul>
                <p>
                  If you’re after something not listed here, get in touch to
                  find out what we can do for you.
                </p>
                <h2>
                  What makes us the finest domestic painters Melbourne wide?
                </h2>
                <p>
                  Our team always prefers to use quality brands such as Dulux,
                  Haymes, Wattyl and Solver, but will happily take on board any
                  requests you have. We want you to be able to enjoy the colour
                  you chose and not compromise on what you want. If you’re not
                  quite sure exactly what it is you want in your Melbourne, our
                  domestic painters can help. We have a wealth of knowledge just
                  waiting to be tapped into!
                </p>
                <p>
                  Our focus on safety can give you peace of mind. Every domestic
                  painter in Melbourne working for us has training on how to
                  evaluate each site and carry out their job to the highest
                  standards as well as a white card. They’re also covered for
                  public liability and work cover. Should they need to use work
                  platforms, scaffolding or harness work to complete the job to
                  a high quality, you can rest assured they’re trained how to
                  use it. We’re prepared for any job, even when access is
                  tricky.
                </p>
                <p>
                  While we’re confident there won’t be any problems, we offer a
                  five year guarantee and the products we use all have extensive
                  warranties should you need to use them.
                </p>
                <p>
                  So that we can get the job done and you can start living your
                  best life in your freshly painted home, we’re happy to work
                  around your schedule including out of hours.
                </p>
                <p>
                  For your free quote, call our domestic painters in Melbourne
                  today on <strong>0408 676 390</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
