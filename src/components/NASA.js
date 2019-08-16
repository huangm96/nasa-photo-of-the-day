import React, { useState, useEffect} from "react";
import NASADailyPhotoCard from "../components/NASADailyPhotoCard";
import axios from 'axios';

const NASA = () => {
    const [photo, setPhoto]=useState("");

    useEffect(()=>{
        axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`, {
        params: {}
      })
      .then(response => {
        console.log(response.data)
        const dailyPhoto = response.data;
        setPhoto(dailyPhoto);
      })
      .catch(function (error) {
        
        console.log(error);
      }) 
  }, []);

    return (
        <div className="container">

<NASADailyPhotoCard date={photo.date}
                    explanation = {photo.explanation}
                    image={photo.hdurl}
                    title={photo.title}/>
        </div>

    )


}
export default NASA;