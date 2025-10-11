import { useState } from 'react';


function AnswerBox({answer, nextQuestion,tags, sendData}) {

    const handleClick = () => {
        sendData(nextQuestion, tags);
    }

    return (
        <div className='answerBox'>
            <button onClick={handleClick}>
                {answer}
            </button>
        </div>
    );
}

export default AnswerBox;