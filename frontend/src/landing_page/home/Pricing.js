import React from 'react';
function Pricing() {
    return ( 
        <div className="conatiner p-5">
            <div className="row p-5">
                <div className="col-4">
                    <h2 className="mb-5">Unbeatable pricing</h2>
                    <p className="mb-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"> </div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col-6 p-3 border">
                            <h1 classname="mb-5"><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
    
                            <div className="col-6 p-3 border">
                            <h1  classname="mb-5"><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;