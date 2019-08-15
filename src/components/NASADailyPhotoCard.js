import React from "react";
import styled from 'styled-components';

const DailyPhoto = styled.img`
     width:70%;
`;
const Date = styled.p`
    color:red;
`;

const Explanation = styled.p`
    margin: 30px auto;
    width:80%;
  `;

const NASADailyPhotoCard = (props) => {
    if (!props.image)
        return <h3>Loading...</h3>;

    return (
        <div>

            <Date>{props.date}</Date>
            <DailyPhoto src={props.image} alt="nasa" />
            <h3>{props.title}</h3>
            <Explanation>{props.explanation}</Explanation>

        </div>

    )


}
export default NASADailyPhotoCard;