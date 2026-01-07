import React from 'react';
function Brokerage() {
    return ( 
        <div className="container p-2 border-top">
            <div className="row mt-5">
                <div className="col-8">
                    <h3 className="text-center"style={{color:'rgba(12,116,169,255)'}}>Brokerage calculator</h3>
                    <ul className="text-muted " style={{listStyleType: 'disc', paddingLeft: '2rem' }}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of <i class="fa-solid fa-indian-rupee-sign"></i>50 + GST per order</li>
                        <li>Digital contract notes will be sent via e-mail</li>
                        <li>Physical copies of contract notes, if required, shall be charged <i class="fa-solid fa-indian-rupee-sign"></i>20 per contract note.Courier charges apply</li>
                        <li>For NRI account (non-PIS), 0.5% or <i class="fa-solid fa-indian-rupee-sign"></i>100 per exectued order for equity (whichover is lower)</li>
                        <li>For NRI account(PSI), 0.5% or <i class="fa-solid fa-indian-rupee-sign"></i>200 per executed order for equity (whichever is lower)</li>
                        <li>If the account is in debit balance, any order placed will be charged <i class="fa-solid fa-indian-rupee-sign"></i>40 per executed order instead of <i class="fa-solid fa-indian-rupee-sign"></i>20 per executed order</li>
                    </ul>
                </div>
                <div className="col-4">
                     <h3 className="text-center"style={{color:'rgba(12,116,169,255)'}}>List of charges</h3>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;