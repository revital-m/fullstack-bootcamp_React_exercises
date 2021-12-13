import React from "react";

const Card = (props) => {
    console.log(props.imgSrc);
    return (
        <div className="card">
            <img className="cardImg" src={props.imgSrc} alt=""></img>
            <div className="cardInfo">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="cardInfo__links">
                    <a className="cardInfo__links--a" href={props.share} target="_blank">SHARE</a>
                    <a className="cardInfo__links--a" href={props.explore} target="_blank">EXPLORE</a>
                </div>
            </div>
        </div>
    );
};

export default Card;