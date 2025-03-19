import React, { useState } from "react";

export default function CountFun(){
    const[count,setCount]=useState(0);
    const[num,SetNum]=useState(5);

    // const Add=()=>{
    //     return SetNum(num+2);
    // }
    // Add();

    return(
        <>
        <h1>UseMemo hook</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <p>Adding Value:{Add}</p>

        </>
    )
}