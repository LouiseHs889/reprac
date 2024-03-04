import React, {useState} from 'react'


const Create = ({mesg,setmesg}) => {
let [input,setInput]=useState("");

const inputHandler=(e)=>{
    let v=e.target.value;
    setInput(v);
    

}
const clickHandler=(e)=>{
    e.preventDefault();
    setmesg([...mesg,input]);
    
    console.log(input);
    
    setInput("");console.log(mesg);
}
  return (
    <div>
        <form>
        <input onChange={inputHandler} value={input} type="text" />
        <button onClick={clickHandler}>click</button>
        </form>
    </div>
  )
}

export default Create