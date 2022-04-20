import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
// import UserContext from './Usercontext';
import swal from "sweetalert";

function Users() {

    const [userData, setUsersData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                let users = await axios.get("https://625683506ea70370053ab8bc.mockapi.io/student/v1/users")
                setUsersData(users.data)
            } catch {
                console.log("error")
            }
        }

        fetchData();
    }, [])

    const deleteUser = (id) => {
        swal({
            title: "Delete User ?",
            text: "Once You Deleted You can't Recover it !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://625683506ea70370053ab8bc.mockapi.io/student/v1/users/${id}`)
                    .then(() => {
                        getData();
                    });

                swal("User has been deleted !", {
                    icon: "success",
                });
            } else {
                swal({
                    title:"User Has Not Deleted!",
                    icon : "error"
                });
            }
        });
    };

    const getData = () => {
        axios.get(`https://625683506ea70370053ab8bc.mockapi.io/student/v1/users/`)
            .then((getData) => {
                setUsersData(getData.data);
            });
    };

    // const userContext = useContext(UserContext);

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User List</h1>
                <Link
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                    to={"/form"}
                >
                    <i className="fa-sm text-white-50"></i> Create User
                </Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Employee Details
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-light table-striped"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                        >
                            <thead className="text-center">
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Position</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* maping array data into table */}
                                {userData.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            {/* <td className='text-center'>{data.id}</td> */}
                                            <td className='text-center text-dark text-capitalize'>{user.firstname}</td>
                                            <td className='text-center text-dark text-capitalize'>{user.lastname}</td>
                                            <td className='text-center text-dark text-capitalize'>{user.position}</td>
                                            <td className='text-center text-dark text-capitalize'>{user.salary}</td>
                                            <td className="text-center ">
                                                <Link to={`/user-view/${user.id}`} type="button" class="btn btn-success"> View </Link>
                                                <Link to={`/user-edit/${user.id}`} type="button" class="btn btn-primary m-1"> Edit </Link>
                                                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users