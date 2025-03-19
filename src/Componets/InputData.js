import React, {useState} from "react";

const TodoList = ()=>{
    const[input,setInput] = useState('');
    const[addInput,setAddInput]=useState([]);

    const addData = ()=>{
        if(input){
            setAddInput([...addInput,input]);
            setInput('')
        }
    }

    const Delete = (index)=>{
        const deleteUser = addInput.filter((item,id)=>id!==index);
        setAddInput(deleteUser);


    }
    const editUser =(index)=>{
        
        setAddInput(addInput([index]));
        setInput(input(index));
    }
    return (
        <div>
            <h1>list the users</h1>
            <input type='text' value= {input} onChange={(e)=>(setInput(e.target.value))}/>
            <button onClick={addData}>Add</button>

            <ul>
                {addInput.map((item,index)=>(
                    <li key={index}>{item} <button onClick={()=>Delete(index)}>Delete</button> 
                    <button onClick={()=>editUser(index)}>Edit</button> </li>
                ))}
            </ul>
            {/* <h4>{input}</h4> */}
        </div>
    )
}

export default TodoList;