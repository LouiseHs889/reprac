import React from "react" ;
import { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('Taylor');
 // let friends =["John","Andrew","Greg"];
  let age=20;
  const ChangeName=()=> {
    setName("小華");
  }
  return (
    <div>
      {/* {
        friends.map(friend=>{
          return <h1>Hello {friend} ! </h1>
        })
} */}

        <h2>Name:　{name}</h2>
        <h2>Age:　{age}</h2>
        <button onClick={ChangeName}>改名字</button>
     
    </div>
  )
}

export default Info