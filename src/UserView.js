import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import UserContext from './Usercontext'
import axios from 'axios';

function UserView() {

  // const userContext = useContext(UserContext)
  let params = useParams()
  const [user,setUser] = useState({})
  useEffect(async ()=>{
    try{
      const response = await axios.get(`https://625683506ea70370053ab8bc.mockapi.io/student/v1/users/${params.id}`)
    setUser(response.data)
    }catch{
      console.log("data Error")
    }
  },[])


  return (
    <div>
      <h1 className='text-center'>User Details</h1>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-dark table-striped" id="dataTable" width="100%" cellSpacing="0">
            <thead className="text-center">
              <tr>
                <th className='h4'>First Name</th>
                <th className='h4'>Last Name</th>
                <th className='h4'>Position</th>
                <th className='h4'>Salary</th>
              </tr>
            </thead>
            <tbody>
              <td className='text-center h5 text-capitalize'>{user.firstname}</td>
              <td className='text-center h5 text-capitalize'>{user.lastname}</td>
              <td className='text-center h5 text-capitalize'>{user.position}</td>
              <td className='text-center h5 text-capitalize'>{user.salary}</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserView