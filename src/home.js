
import React, {Component, useState} from "react";

export const newContact = () => ({
    isAnExecutor: false,
  })

  export const FancyButton = React.forwardRef((props, refs) => (
    <button ref={refs} className="FancyButton">
      {props.children}
    </button>
  ));

 console.log(newContact().isAnExecutor)

 function saveClicked() {
    // console.log("true", newContact().isAnExecutor = true)
    var a = newContact().isAnExecutor;
    a = true;
    console.log(a)
    return a;
 }

export default function Home() {
    return (
    <>
    <h2>Home</h2>
    <div>{newContact().isAnExecutor.toString()}</div>
    <button onClick={saveClicked}>save</button>
    <Hello29 />
    </>
    )
  }

   function Hello29() {
    const [data,setData] = useState("name")
    
    const handle=()=>{
    setData("name changed")
    }
    return (
    <div>
    <button onClick={handle}>hello</button>
    {data}
    </div>
    )
    }