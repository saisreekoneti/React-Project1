import React, {useState} from "react";

export default function TodoApp(){
    const[name,setName] =useState("");
    const[toDos,setTodos]=useState([]);
    const enterName = ()=>{
        if(name){
            setTodos([...toDos,name]);
            setName("")

        }

    }
    const deleteName=(index)=>{
        const newToDos=toDos.filter((item,id)=>id!==index);
        setTodos(newToDos);

    }

    return(
        <div>
            <p>todo app</p>
            <input type='text'  value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={enterName}>Enter</button>
            
            <ul>
                {toDos.map((item,index)=>(
                    <li key={item}>{item} <button onClick={()=>deleteName(index)} >Delete</button></li>

                ))}
            </ul>
        </div>
    )
}