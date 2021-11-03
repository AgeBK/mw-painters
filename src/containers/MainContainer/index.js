// @flow
import React from "react";
import styles from "./MainContainer.module.css";
import Nav from "../../components/Header";
import Footer from "../../components/Footer";

// TODO: ADD FLOW TESTS?

// const MainContainer = WrappedComponent => (props: Props) => (
const MainContainer = (WrappedComponent) => () =>
  (
    <>
      <Nav />
      <main className={styles.container}>
        {/* App component is passed into MainContainer as WrappedComponent */}
        <div className={styles.contInner}>
          <WrappedComponent />
        </div>
      </main>
      <Footer />
    </>
  );

export default MainContainer;

// const MainContainer = (props: Props) => {
//   console.log(props);

//   const HOC = () => (
//     <div className="results mainOuter">
//       <div className="row">
//         <a className={styles.homeLink} href="/">
//           <div className={`${[styles.intro, styles.bgMain].join(' ')} col-12`}>
//             <h1>{Config.siteTitle}</h1>
//             <p>{Config.siteIntro}</p>
//           </div>
//         </a>
//         <hr />
//         <props />
//       </div>
//     </div>
//   );
//   return HOC;
// };
