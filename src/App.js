// // function User(){
// //     return(
// //         <h2>This is Function Component</h2>
// //     )
// // }

// // import Box from "./Components/Box";

// // export default User

// // let Admin=()=>{
// //     return(
// //         <h1>this is arrow function component</h1>
// //     )
// // })

// // export default Admin


// //**class based component//

// // import React,{Component} from "react";

// // class Mydata extends Component{
// //     render(){
// //         return(
// //             <div>
// //                 <h2>class component</h2>
// //             <p>database ad a das</p>
// //             </div>
// //         )
// // }
// // }

// // export default Mydata




// // import React,{Component} from "react";

// // class Mydata extends Component{
// //     render(){
// //         return(
// //             <React.Fragment>

// //             <h2>class component</h2>
// //             <p>database ad a das</p>
// //             </React.Fragment>

// //         )
// // }
// // }

// // export default Mydata




// // function User(){
// //     return(
// //         <>
// //         <h2>User Name=Vishnu</h2>
// //         <p></p>
// //     )
// // }



// // function User(){
// //     return()
// // }

// //RCC used to make class component
// //rfce                   function based component
// //rafc                   arrow function

// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>

// //       </div>
// //     )
// //   }
// // }

// // import React from 'react'

// // function App() {
// //   return (
// //     <div>App</div>
// //   )
// // }

// // export default App


// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App

// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App


// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default App

// // import React from "react"
// // import user from './User'
// // import User from "./User"
// // function App()
// // {
// //     return(
// //         <>
// //         <h2>App component</h2>
// //         <hr>
// //         <user name='vishnu' roll='101'/>
// //         </hr>
// //         <User name='kishan' roll='102' />
// //         </hr>
// //         <user name='manish' roll='103'/>
// //         </>
// //     )
// // }
// // export default App



// // import React from 'react'
// // import User from './User'
// // function App(){
// //     let val="sumit"
// //     return(
// //         <>
// //         <h2>this is app comp</h2>
// //         <hr/>
// //         <User update={val}/>
// //         </>
// //     )
// // }

// // export default App


// // import React, { Component } from 'react'
// // import User from './User'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <>
// //       <h2>app class component</h2>
// //       <hr/>
// //       <User udata={data}/>
// //         </>
// //     )
// //   }
// // }




// // state 16-4
// //with constractor
// //without constractor
// {/*    comment           */}







// import Box from "./Components/Box";
// function Card(){
//     return(
//         <div className="cardItems">Card Div</div>
//     )
// }




//  8   --------------------------------------------------


// import React from "react";
// import Heading from "./Components/Heading";
// import Para from "./Components/Para";
// import List from "./Components/List";

// function App(){
//     return(
//         <>
//         <Heading />
//         <Para />
//         <List />
//         </>
//     );
// }


// export default App;



//   9    --------------------------------------------------------



// import React from "react";
// import './index.css'


// function App() {
//     let currDate = new Date();
//     currDate = currDate.getHours();
//     let greeting = '';
//     let cssStyle = {};

//     if (currDate >= 1 && currDate < 12) {
//         greeting = 'Good Morning';
//         cssStyle.color = "green";
//     }
//     else if (currDate >= 12 && currDate < 19) {
//         greeting = 'Good Afternoon';
//         cssStyle.color = "orange"
//     }
//     else {
//         greeting = 'Good Night';
//         cssStyle.color = 'black'
//     }
//     return (
//         <>
//             <div>
//                 <h1>Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
//             </div>
//         </>
//     );
// }


// export default App;




//     10     ------------------------------------------------

// import React from "react";
// import add, {sub, div, mul } from './Calc';

// function App() {
//     return (
//         <>
//             <ul>
//                 <li>The sum of Two no. is = {add(40, 4)}</li>
//                 <li>The sub of Two no. is = {sub(40, 4)}</li>
//                 <li>The div of Two no. is = {div(40, 3)}</li>
//                 <li>The mul of Two no. is = {mul(40, 4)}</li>
//             </ul>
//         </>
//     )
// }


// export default App;




// ----------------------Hooks--------------------------------------------------------




// import React, { useState } from "react";




// const App = () => {

//     const state = useState();
// // console.log(state)

// const [count,setCount] = useState(0);

// const IncNum = () => {
//     setCount(count+1);
//     //  console.log("clicked " + count++ );
// };
//     return(
//         <>
//         <h1> {count} </h1>
//         <button onClick={IncNum}>Click Me</button>
//         </>
//     )
// }


// export default App;




//-------------------------Hook 2---------------------------------------------------------


// import React, { useState } from "react";

// const App =  () => {

//     let newTime = new Date().toLocaleTimeString();

//     const[ctime, setCtime]= useState(newTime);

//     const UpdateTime = () => {
//         let newCTime = new Date().toLocaleTimeString();
//         setCtime(newCTime)
//     }
//     return(
//         <>
//         <h1>{ctime}</h1>
//         <button onClick={UpdateTime}>Get Time</button>
//         </>
//     )
// };


// export default App;




//-----------------------------Hooks (Digital Clock)--------------------------------------------


// import React, { useState } from "react";

// const App = () => {

//     let time = new Date().toLocaleTimeString();

//     const [ctime, setCtime] = useState(time);

//     const UpdateTime = () => {
//         time = new Date().toLocaleTimeString();
//         setCtime(time);

//     };
//     setInterval(UpdateTime, 1000)

//     return(
//         <>
//         <h1>{ctime}</h1>
//         </>
//     )
// }

// export default App;





//-------------------------------------Events----------------------------------------------




// import React, { useState } from "react";

// const App = () => {
    
//     const purple = "#8e44ad";
//     const [bg, setBg] = useState(purple);
//     const [name, setName] =  useState('click Me')

//     const bgChange = () =>{
//         let newBg = '#34495e'
//         setBg(newBg);
//         setName("Ouch!! ")
//     };

//     const bgBack = () => {
//         setBg("purple");
//         setName("Ayyo!!")
//     }

//     return(
//         <>
//         <div style={{ backgroundColor: bg }}>
//             <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
//         </div>
//         </>
//     )
// }


// export default App;



//-----------------------------------Forms-----------------------------------------------------------


import React, { useState } from "react";

const App = () => {

    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();


    const InputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    };

    const onSubmit = () => {
        setFullName(name)
    }

    return(
        <>
        <div>
            <h1>Hello { fullName}</h1>
            <input type="text" placeholder="Enter your Name " onChange={InputEvent} value={name}/>
            
            <button onClick={onSubmit}>Click Me</button>
        </div>
        </>
    );
}


export default App;



















