import Create from './Create.js';
import React, {useState} from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './Layout.js';
import Home from './Home.js';
import Page from './Page.js';
import NoPage from './NoPage.js';
let friends=[
  {name:"Peter",age:50},
  {name:"Greg",age:40},
  {name:"Emily",age:30}
];
const clickandhappen=(msg)=>{
  alert(msg);
}

function App() {
  let [mesg,setmesg]=useState([]);
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home/>}/>
              <Route path='pages' element={<Page/>}/>
              <Route path="*" element={<NoPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
  )
  // <div>
      {/* <button onClick={()=>{clickandhappen("today is busy !!")}}>click me </button> */}
      {/* <Nav/>
      {
        friends.map((friend)=>(
          <Info name={friend.name} age={friend.age}/>
        ))}
       */
           
       }
     {/* <Create mesg={mesg} setmesg={setmesg}/> */}

    // </div>;


 }

export default App;
