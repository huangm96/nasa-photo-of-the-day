import React, { useState } from "react";



const NASADailyPhotoCard = (props) => {
    if (!props.image) 
    return <h3>Loading...</h3>;
    
    return (
        <div>

<p className ="date">{props.date}</p>
<img className="dailyPhoto"src={props.image} alt="nasa"/>
<h3>{props.title}</h3>
<p className ="explanation">{props.explanation}</p>

        </div>

    )


}
export default NASADailyPhotoCard;