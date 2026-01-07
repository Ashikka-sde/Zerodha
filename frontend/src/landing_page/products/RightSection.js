import React from 'react';
function RightSection({
    imageURL, 
    productName, 
    productDescription, 
    learnMore
}) {
    return (  
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col p-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <p><a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
                <div className="col">
                    <img src={imageURL} style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;