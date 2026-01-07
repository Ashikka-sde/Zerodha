import React from 'react';
function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
}) {
    return ( 
        <div className="container mt-5">
            <div className="row mt-5 align-items-center">
                <div className="col-6 mb-5">
                    <img src={imageURL} style={{width:"90%"}}></img>
                </div>
                <div className="col-6">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div style={{marginBottom:"20px"}}>
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>
                    <div>
                    <a href={googlePlay}><img src="media/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"20px"}}><img src="media/appstoreBadge.svg"/></a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;