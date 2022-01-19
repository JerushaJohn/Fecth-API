import React, { useEffect, useState } from 'react'
import Table from './Table'


function FetchUser() {
    const [users, setusers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res=>res.json()))
        .then(data=>{
            console.log(data)
            setusers(data)
        })
    },[])

   
    return (
        <div>
            <h2>Table</h2>
            {/* Users:{users.length} */}
            <table cellSpacing={0}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return <Table key={index} users={user} />

                    })}
                </tbody>
            </table>

            
        </div>
    )
}


export default FetchUser
