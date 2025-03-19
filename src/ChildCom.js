import React from "react";

const ChildCom=({childInputData, childColur, ParentColour, ParentInput})=>{
    return(
        < div style={{backgroundColor:childColur}} >
        <h1 >Child Componet</h1>
        <h4>{childInputData}</h4>
        <input onChange={ParentInput}/>
        <button onClick={ParentColour}>Send colour to Parent</button>
        </div>
    )
}
export default ChildCom;