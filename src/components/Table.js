import React from 'react'

  const Table = ({ users }) => {
         return (    
           
        <tr>
            <td>{users.id}</td>
            <td>{users.name}</td>
            <td>{users.username}</td>
            <td>{users.email}</td>
            <td>street: {users.address.street}<br />
                suite: {users.address.suite}<br />
                city: {users.address.city}<br />
                zipcode: {users.address.zipcode}<br />
                lat: {users.address.geo.lat}<br />
                lng: {users.address.geo.lng}</td>
            <td>{users.phone}</td>
            <td>{users.website}</td>
            <td>name: {users.company.name}<br />
                catchPhrase: {users.company.catchPhrase}<br />
                bs: {users.company.bs}</td>


        </tr>
    
      
    )
}

export default Table
