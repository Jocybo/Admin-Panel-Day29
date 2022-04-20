import React, { useContext } from 'react'
import { useFormik } from 'formik'
import UserContext from './Usercontext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Form() {
    const navigate = useNavigate()

    let userContext = useContext(UserContext);

    let formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            position: "",
            salary: 0
        },
        validate: (values) => {
            const errors = {};
            if (!values.firstname) {
                errors.firstname = "Enter Your Firstname Here"
            }
            if (!values.lastname) {
                errors.lastname = "Enter Your Lastname Here"
            }
            if (!values.position) {
                errors.position = "Office Required Your Position"
            }
            if (!values.salary) {
                errors.salary = "Enter Your Salary Here Per Month"
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://625683506ea70370053ab8bc.mockapi.io/student/v1/users", values)
                userContext.setUsers([...userContext.users, values])
                navigate("/users", { replace: true })

            } catch {
                console.log("error")
            }
        }
    })

    let userCreated = () => {

        swal({
            title: "User Created",
            icon: "success"
        });
    }
    return (
        <div className="container">
            <h1 className="text-center">Create New User</h1>
            <form className="row g-3" onSubmit={formik.handleSubmit}>
                <div className="col-lg-12 mb-2">
                    <label htmlFor="username" className="form-label text-dark">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="First name"
                        name="firstname"
                        required
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        style={{ border: formik.values.firstname !== "" ? "1px solid green" : "" }}
                    />
                    <span style={{ color: "red" }}>{formik.errors.firstname}</span>
                </div>
                <div className="col-lg-12 mb-2  ">
                    <label htmlFor="username" className="form-label  text-dark">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Last name"
                        name="lastname"
                        required
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        style={{ border: formik.values.lastname !== "" ? "1px solid green" : "" }}
                    />
                    <span style={{ color: "red" }}>{formik.errors.lastname}</span>
                </div>
                <div className="col-lg-12 mb-2">
                    <label htmlFor="inputEmail4" className="form-label  text-dark">
                        Position
                    </label>
                    <input type="text"
                        className="form-control"
                        aria-label='Position'
                        name="position"
                        required
                        value={formik.values.position}
                        onChange={formik.handleChange}
                        style={{ border: formik.values.position !== "" ? "1px solid green" : "" }}
                    />
                    <span style={{ color: "red" }}>{formik.errors.position}</span>
                </div>
                <div className="col-lg-12 mb-4">
                    <label htmlFor="inputPassword4" className="form-label  text-dark">
                        Salary
                    </label>
                    <input type="number"
                        className="form-control "
                        name="salary"
                        required
                        value={formik.values.salary}
                        onChange={formik.handleChange}
                        style={{ border: formik.values.salary === "" ? "1px solid grey" : "1px solid Green" }}
                    />
                    <span style={{ color: "red" }}>{formik.errors.salary}</span>
                </div>

                <div className="col-12 d-flex justify-content-center">
              
                    <button 
                    disabled={!formik.isValid}
                    onClick={() => userCreated()} type="submit" className="btn btn-lg btn-primary">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form