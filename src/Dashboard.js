import React from 'react'

function Dashboard() {

    const dashData = [
        {
            title: "EARNINGS (MONTHLY)",
            price: "$40,000",
            design1: true,
            fontStyle1 : true,
            icon1: true,
        },
        {
            title: "EARNINGS (ANNUAL)",
            price: "$215,000",
            design2 : true,
            fontStyle2 : true,
            icon2: true,
        },
        {
            title: "TASKS",
            price: "50%",
            progress: true,
            design3 : true,
            fontStyle3 : true,
            icon3: true,
        },
        {
            title: "PENDING REQUESTS",
            price: "18",
            design4 : true,
            fontStyle4: true,
            icon4: true,
        },
    ];

    return (
        <>
            
            <div className="row">
                {/* maping dashboard details */}
                {dashData.map((box, id) => {
                    return (
                        <div key={id} className="col-xl-3 col-md-6 mb-4">

                            <div className= { box.design1 ? "card border-left-primary shadow h-100 py-2" : box.design2  
                                                         ? "card border-left-success shadow h-100 py-2" : box.design3 
                                                         ? "card border-left-info shadow h-100 py-2" : box.design4 
                                                         ? "card border-left-warning shadow h-100 py-2" : ""
                                }>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            {/* styling dashboard data */}
                                            <div
                                                className={ box.fontStyle1  ? "text-xs font-weight-bold text-primary text-uppercase mb-1" : box.stylingFont2
                                                            ? "text-xs font-weight-bold text-success text-uppercase mb-1" : box.stylingFont3
                                                            ? "text-xs font-weight-bold text-info text-uppercase mb-1" : box.fontStyle4
                                                            ? "text-xs font-weight-bold text-warning text-uppercase mb-1" : ""
                                                }>
                                                {box.title}
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                        {box.price}
                                                    </div>
                                                </div>
                                                {box.progress ? (
                                                    <div className="col">
                                                        <div className="progress progress-sm mr-2">
                                                            <div
                                                                className="progress-bar bg-info"
                                                                role="progressbar"
                                                                style={{ width: "50%" }}
                                                                aria-valuenow="50"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-auto">

                                            <i className={ box.icon1 ? "fas fa-calendar fa-2x text-gray-300" : box.icon2 
                                                                   ? "fas fa-dollar-sign fa-2x text-gray-300" : box.icon3
                                                                   ? "fas fa-clipboard-list fa-2x text-gray-300" : box.icon4
                                                                   ? "fas fa-comments fa-2x text-gray-300" : ""
                                                }
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </>
    );
}

export default Dashboard