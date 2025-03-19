import React, { useEffect, useState } from "react";

export default function ListUsers() {
    const [usersData, setUsers] = useState([]);
    const [num,setId] = useState(0)
    useEffect(() => {
        const listUsers = async () => {
            try {
                const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users") //limit:10
                const result = await fetchUsers.json()
                setUsers(result)
                

            } catch (error) {
                console.error(error)
            }
        }
        listUsers()
    }, [])
    const filterById = usersData.filter((item)=> item.id===Number(num))
    return (
        <div>
            <p>List the Users</p>
            <span>Enter iD Number</span>
            <input type='number' value={num} onChange={(e)=>setId(e.target.value)}/>
            {usersData.length > 0 ? (
                <ul>
                    {filterById.map((item)=>(
                      <div key={item.id}>
                      <li>{item.id}</li>
                      <li>{item.name}</li>
                      <li>{item.email}</li>
                      <li>{item.address.city}</li>
                      </div>
                        
                    ))}

                </ul>
            ) : (<p>loading</p>)
            }
        </div >
    )
}