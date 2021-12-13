import React from "react";

const Button = (props) => {
    return (
        <button className="btn">
            <p className={props.boldText}>{props.textBtn}</p>
        </button>
    );
};

export default Button;