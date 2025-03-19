import React, {useState} from "react";
import ChildCom from "./ChildCom";

const ParentCom=()=>{
    const[input,setInput]=useState('');
    const[color,setColor]=useState(null);
    const[parentClor,setParentColr]=useState(null);
    const[parentInput,setParentInput]=useState('');
    const ApplyColor=()=>{
        return setColor('pink');
    }
    const ParentColour=()=>{
        return setParentColr('green')
    }
    const ParentInput=(e)=>{
        return setParentInput(e.target.value)
    }

    return (
       
        <div>
             <div style={{backgroundColor:parentClor}}>
            <h1>Parent Component</h1>
            <h5>{parentInput}</h5>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <br/>
            <button onClick={ApplyColor}>send color</button>
            </div>
            <div>
            <ChildCom childInputData={input} childColur={color} ParentColour={ParentColour} ParentInput={ParentInput}/>
            
            </div>
            

        </div>
    )
}
export default ParentCom;