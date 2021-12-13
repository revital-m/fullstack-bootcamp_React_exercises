import React from "react";
import Q1 from "./Q1";
// import Q1Title from "./Q1Title";
import Q2 from "./Q2";
import QuizTitle from "./QuizTitle";

const Quiz = () => {
    return (
        <div className="quiz">
            <QuizTitle />
            <Q1 />
            <hr />
            <Q2 />
        </div>
    );
}

export default Quiz;