import React from 'react';
function Universe() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row text-center">
                <p className="fs-4">Want to know more about our technology stack? Check out the Zerodha.tech blog</p>
                <h1 className="mt-5">The Zerodha Universe</h1>
                <p className="mt-1">Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row mt-4 p-5 text-center">
                <div className="col-4 pl-5 pr-5">
                    <img src="media/smallcaselogo.png"></img>
                    <p className="text-muted fs-7 mb-5">Thematic investment platform</p>
                    <img src="media/zerodhaFundhouse.png" className="mt-5" style={{width:"50%"}}></img>
                    <p className="text-muted fs-7 mb-5">Asset Management</p>
                </div>
                <div className="col-4 pl-5 pr-5">
                    <img src="media/sensibullLogo.svg" style={{width:"45%"}}></img>
                    <p className="text-muted fs-7 mb-5">Options trading platform</p>
                    <img src="media/streakLogo.png" className="mt-5" style={{width:"45%"}}></img>
                    <p className="text-muted fs-7 mb-5">Algo & Stratergy platform</p>
                </div>
                <div className="col-4 pl-5 pr-5">
                    <img src="media/dittoLogo.png" style={{width:"30%"}}></img>
                    <p className="text-muted fs-7 mb-5">Insurance</p>
                    <img src="media/goldenpiLogo.png" className="mt-5"style={{width:"40%"}}></img>
                    <p className="text-muted fs-7 mb-5">Bonds trading platform</p>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary"  style={{width:"20%"}}>Sign up now</button>
            </div>

        </div>
     );
}

export default Universe;