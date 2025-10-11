import { useState } from "react";
import PropTypes from "prop-types";


function Question({question, answers}) {
    const [visible, setVisible] = useState(false);
    const [nextQuestion, setNextQuestion] = useState(""); 

    function handleData(data) {
        setNextQuestion(data);
        
    }

    return (
        <>
            <h1>{question}</h1>
            <div>
                {answers}
            </div>
        </>
    )
}