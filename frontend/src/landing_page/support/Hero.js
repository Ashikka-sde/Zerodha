import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid" style={{color:"white", backgroundColor:"rgb(56,126,209"}}>
            <div className="p-5 " id="supportWrapper">
                    <h4>Support Portal</h4>
                    <a className="fs-5"href="" style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className="row p-5 mx-5">
                <div className="col-6 p-5" >
                    <h3 className="mb-5">Search for an answer or browse help topics to create a ticket</h3>
                    <input className="mb-5" style={{width:"90%", height:"35%"}}placeholder='Eg: how do I activate F&O, why is my order getting rejected'/><br/>
                    <a href="" style={{color:"white"}}>Track account opening </a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" style={{color:"white"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" style={{color:"white"}}>Intradex</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" style={{color:"white"}}>margins</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="" style={{color:"white"}}>Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="col-6 p-5">
                    <h4>Featured</h4>
                    <a href="" className="mb-1 d-block"style={{color:"white"}}>1. Current Takeovers and Delisting- January 2024</a><br/>
                    <a href="" style={{color:"white"}}>2. Latest Intraday leverages - MIS & CO</a>
                </div>

            </div>
        </section>

     );
}

export default Hero;