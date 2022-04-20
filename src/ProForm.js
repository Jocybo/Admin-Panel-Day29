import React from 'react'

function ProFrom() {
    return (


        <div className="container">
            <h1 className="text-center">Create New Product</h1>
            <form className="row g-3">
                <div className="col-md-12 mb-2">
                    <label htmlFor="username" className="form-label">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="First name"
                    />
                </div>
                <div className="col-md-12 mb-2">
                    <label htmlFor="username" className="form-label">
                        Category
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Last name"
                    />
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="inputEmail4" className="form-label">
                        Product Price
                    </label>
                    <input type="email" className="form-control" id="inputPosition" />
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-lg btn-primary">
                        Create
                    </button>
                </div>
            </form>
        </div>

    )
}

export default ProFrom