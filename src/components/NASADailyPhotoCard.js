import React, { useState } from "react";



const NASADailyPhotoCard = (props) => {

    return (
        <div>

<p className ="date">{props.date}</p>
<img className="dailyPhoto"src={props.image} alt="nasa"/>
<p className ="explanation">{props.explanation}</p>

        </div>

    )


}
export default NASADailyPhotoCard;