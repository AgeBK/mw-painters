// import React, { useState, useEffect } from "react";

// const Test = () => {
//   console.log("Test");
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     console.log("useEffect");

//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;

//     const g = (val) => alert("g");
//   });

//   const f = (val) => g();

//   return (
//     <div>
//       {console.log("return")}
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <button onClick={() => f()}>f me</button>
//     </div>
//   );
// };

// export default Test;
