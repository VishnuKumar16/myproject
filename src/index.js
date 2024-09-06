// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import User from "./App";
// import ReactDOM from 'react-dom'

// ReactDOM.render(<User/>,document.getElementById('root'))



// import Admin from "./App";
// import ReactDOM from 'react-dom'

// ReactDOM.render(<Admin/>,document.getElementById('root')


// import Mydata from "./App";
// import ReactDOM from 'react-dom'

// ReactDOM.render(<Mydata/>,document.getElementById('root'))


//    1  -----------------------------------


// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//     <>
//     <h1>Welcome to Netflix </h1>
//     <p>Top 5 Webseries </p>
//     <ul>
//         <li>Stranger Things</li>
//         <li>Dark</li>
//         <li>Money Heist</li>
//         <li>After Life</li>
//         <li>The Witcher</li>
//     </ul>
//     </>,
//     document.getElementById("root")
// )




//     2    -----------------------------------


// import React from "react";
// import ReactDom from "react-dom";

// const fName = 'Vishnu Kumar'

// ReactDom.render(
//     <>
//     <h1>My name is {fName}</h1>
//     </>,
//     document.getElementById('root')
// )



//     3    ---------------------------------------



// import React from "react";
// import RenderDom from "react-dom";

// const fName='Vishnu';
// const lName='Kumar';

// RenderDom.render(
//     <>
//     <h1>{`My name is ${fName} and last name is ${lName}`}</h1>
//     <p>This is p tag</p>
//     </>,
//     document.getElementById('root')
// )



//     4     ------------------------------------------


// import React from "react";
// import ReactDom from "react-dom";

// const name='Vishnu Kumar'
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDom.render(
//     <>
//     <h1>Hello, My name is {name}</h1>
//     <p>Current date is = {currDate} </p>
//     <p>Current time is = {currTime}</p>
//     </>,
//     document.getElementById('root')
// )




//        5       -----------------------------------------


// import React from "react";
// import ReactDom from "react-dom";

// const name = 'Vishnu Kumar';
// const image = "https://picsum.photos/200/300"
// const image2 = "https://picsum.photos/250/300";
// const image3 = "https://picsum.photos/300/300";
// const image4 = "https://picsum.photos/310/300";
// const links = "https://picsum.photos/"


// ReactDom.render(
//     <>
//     <h1 contentEditable ='true'>My nsme is {name}</h1>
//     <img  src={image} alt="random images"  />
//     <img  src={image2} alt="random images"  />
//     <img  src={image3} alt="random images"  />
//     <a href={links} target="_blank">
//     <img  src={image4} alt="random images"  />   
//     </a>
//     </>,
//     document.getElementById("root")
// )




//      6     --------------------------------------------------



// import React from "react";
// import ReactDom from "react-dom";
// import './index.css';

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/210/300";
// const img3 = "https://picsum.photos/205/300";
// const links = "https://picsum.photos/"

// ReactDom.render(
//     <>
//     <h1 className="heading">This is my gallery</h1>
//     <div className="img_div">
//     <img src={img1} alt="randomImage"/>
//     <img src={img2} alt="randomImage"/>
//     <a href={links} target="_Vishnu">
//     <img src={img3} alt="randomImage"/>
//     </a>
//     </div>
//     </>,
//     document.getElementById('root')
// )




//        7  (Challenge 3 )  -------------------------------------------------



// import React from "react";
// import ReactDom from "react-dom";
// import "./index.css"

// let currDate = new Date();
// currDate = currDate.getHours();
// let greeting = '';
// let cssStyle = {};

// if (currDate >= 1 && currDate < 12) {
//     greeting = 'Good Morning';
//     cssStyle.color = "green";
// }
// else if (currDate >= 12 && currDate < 19) {
//     greeting = 'Good Afternoon';
//     cssStyle.color = "orange"
// }
// else {
//     greeting = 'Good Night';
//     cssStyle.color = 'black'
// }


// ReactDom.render(
//     <>
//         <div>
//             <h1>Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
//         </div>
//     </>,
//     document.getElementById('root')
// )




//     8 (Component)   -----------------------------------------------------




// import React from "react";
// import ReactDom from "react-dom";
// import App from './App';

// ReactDom.render(
//     <App />,
//     document.getElementById("root")
// );




//       9  (Challenge 4 )   ---------------------------------------------------------



// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App"

// ReactDom.render(
//     <App />,
//     document.getElementById('root')
// );




//       10  ---------------------------------------------------------------



// import React from "react";
// import ReactDOM from 'react-dom';
// import App from './App'


// ReactDOM.render(
//     <App />,

//     document.getElementById('root')
// );




//        11   Webseries ( Props )  --------------------------------------------







// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';
// import Card from "./Card";
// import sdata from "./Sdata";

// function ncard(val){
    
// }


// ReactDOM.render(
//     <>
//      <h1 className="heading_style">List of Webseries</h1>
//      {sdata.map((val) =>{
//         return(
//             <Card 
//                 imgsrc={val.imgsrc}
//                 title = {val.sname}
//                 sname = {val.title}
//                 link = {val.link}
//             />
//         );
//      })}
//     </>,
//     document.getElementById("root")
// );




//----------------- Hooks------------------------------------------------------------------------------



import React from "react";
import ReactDom from "react-dom";
import"./index.css"
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"))
    







