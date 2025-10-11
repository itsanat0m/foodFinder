import { useState } from "react";


function Question({ question, answers, passA }) {

    function handleData(num) {
        passA(num)
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

export default Question;