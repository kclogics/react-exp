
 


import React, { useState } from 'react';
 var a =2;
 var color = "red"
 
export default function Home5() {
    return (
    <>
    <h2>Home5</h2>
    {a === 5 ? ( <div>yes it is 5</div>) : <div>no its other number</div>}
    <p>{color || "white"}</p>
    <h3>Hex</h3>
    <p>
      {(() => {
        switch (color) {
          case "red":   return "#FF0000";
          case "green": return "#00FF00";
          case "blue":  return "#0000FF";
          default:      return "#FFFFFF";
        }
      })()}
    </p>
    </>
    )
  }