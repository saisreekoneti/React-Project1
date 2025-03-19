import React, {useState,useEffect} from 'react';

export default function FetchDataTable(){
     const [data, setData] = useState([])
      const [searchTerm,setSearchTerm]=useState(" ")
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const responsiveData = await fetch('https://jsonplaceholder.typicode.com/users');
            const usersData = await responsiveData.json();
            setData(usersData);
            
    
          } catch (error){
            console.error(error);
          }
        }
        fetchData();
      },[])
      console.log(searchTerm);
      const filterData = data.filter((item)=> item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return (
        <div className="App">
          <h1>hi</h1>
          <input type='text' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
          {data.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((item ) =>(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address.city}</td>
                    <td>{item.company.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>loading</p>
          )}
        </div>
      );

}


