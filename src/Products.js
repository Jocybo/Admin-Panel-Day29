import React from 'react'
import { Link } from "react-router-dom";


function Products() {
    const userData = [
        {
            id: 1,
            productName: "Samsung Galaxy S20",
            category: "Mobile",
            productPrice: 120000
        },
        {
            id: 2,
            productName: "Iphone 13 Pro",
            category: "Mobile",
            productPrice: 180000
        },
        {
            id: 3,
            productName: "Macbook Pro",
            category: "Laptops",
            productPrice: 200000
        },
        {
            id: 4,
            productName: "Asus ROG",
            category: "Laptops",
            productPrice: 67000
        },
        {
            id: 5,
            productName: "Nokia 8",
            category: "Mobile",
            productPrice: 37000
        },
        {
            id: 6,
            productName: "Acer Nitro Gaming",
            category: "Laptops",
            productPrice: 78000
        },
        {
            id: 7,
            productName: "Lenovo Ideapad",
            category: "Laptops",
            productPrice: 54000
        },
        {
            id: 8,
            productName: "Hp Omen",
            category: "laptops",
            productPrice: 88000
        },
        {
            id: 9,
            productName: "Dell Alienware",
            category: "Laptops",
            productPrice: 300000
        },
        {
            id: 10,
            productName: "One Plus 8 Pro",
            category: "Mobile",
            productPrice: 43000
        },
    ];
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Products</h1>
                <Link className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" to={"/pro-form"}>
                    <i className="fa-sm text-white-50"></i> Create Product
                </Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        DataTables Example
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                        >
                            <thead className="text-center">
                                <tr>
                                    <th>No</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Product Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* maping array data into table */}
                                {userData.map((data, id) => {
                                    return (
                                        <tr key={id}>
                                            <td className='text-center'>{data.id}</td>
                                            <td className='text-center'>{data.productName}</td>
                                            <td className='text-center'>{data.category}</td>
                                            <td className='text-center'>{data.productPrice}</td>
                                            <td className="text-center ">
                                                <button type="button" className="btn btn-success">View</button>
                                                <button className="btn btn-primary m-1">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
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

export default Products