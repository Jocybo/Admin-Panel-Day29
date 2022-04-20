import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserEdit() {
    const navigate = useNavigate()

    let params = useParams()
    let formik = useFormik({
        initialValues: {

            firstname: "",
            lastname: "",
            position: "",
            salary: 0
        },
        validate: (values) => {
            const errors = {};
            if(!values.firstname){
                errors.firstname = "Enter Your Firstname Here"
            }
            if(!values.lastname){
                errors.lastname="Enter Your Lastname Here"
            }
            if(!values.position){
                errors.position = "Office Required Your Position"
            }
            if(!values.salary){
                errors.salary = "Enter Your Salary Here Per Month"
            }
            return errors;
        },
        onSubmit: async (values) => {
            await axios.put(`https://625683506ea70370053ab8bc.mockapi.io/student/v1/users/${params.id}`, values)
            navigate("/users",{replace: true})
        }
    })
    useEffect(() => {
        async function fetchData(){
            try {
                let user = await axios.get(`https://625683506ea70370053ab8bc.mockapi.io/student/v1/users/${params.id}`)
                formik.setValues(user.data);
            } catch (error) {
            console.log(error);
            }    
        }
        fetchData();
    },[])

    return (
        <div className="container">
            <h1 className="text-center">Edit User Details</h1>
            <form className="row g-3" onSubmit={formik.handleSubmit}>
                <div className="col-lg-12 mb-2">
                    <label htmlFor="username" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="First name"
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        style={{border: formik.errors.firstname ? "1px solid red" : "1px solid green"}}
                    />
                </div>
                <div className="col-lg-12">
                    <label htmlFor="username" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Last name"
                        name="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        style={{border: formik.errors.lastname ? "1px solid red" : "1px solid green"}}
                    />
                </div>
                <div className="col-lg-12 mb-2">
                    <label htmlFor="inputEmail4" className="form-label">
                        Position
                    </label>
                    <input type="text"
                        className="form-control"
                        aria-label='Position'
                        name="position"
                        value={formik.values.position}
                        onChange={formik.handleChange}
                        style={{border: formik.errors.position ? "1px solid red" : "1px solid green"}}
                    />
                </div>
                <div className="col-lg-12 mb-4">
                    <label htmlFor="inputPassword4" className="form-label">
                        Salary
                    </label>
                    <input type="number"
                        className="form-control"
                        name="salary"
                        value={formik.values.salary}
                        onChange={formik.handleChange}
                        style={{border: formik.errors.salary ? "1px solid red" : "1px solid green"}}
                    />
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-lg btn-primary">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserEdit