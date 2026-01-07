import React from 'react';
function Hero() {
    return ( 
       <div className="container">
            <div className="row border-bottom text-center mt-5">
                <h1 className="mb-4">Pricing</h1>
                <p className="mb-5">Free equity investments and flat <i class="fa-solid fa-indian-rupee-sign"></i>20 traday and F&O trades</p>
            </div>
            <div className="row mt-5">
                <div className="col text-center mb-5">
                    <img src="media/pricing0.svg" style={{width:"90%"}} className="mb-4 mt-4"></img>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                 <div className="col text-cente mb-5r">
                    <img src="media/intradayTrades.svg" style={{width:"90%"}} className="mb-4 mt-4"></img>
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                 <div className="col text-center mb-5">
                    <img src="media/pricingMF.svg" style={{width:"90%"}} className="mb-4 mt-4"></img>
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
       </div>
     );
}

export default Hero;