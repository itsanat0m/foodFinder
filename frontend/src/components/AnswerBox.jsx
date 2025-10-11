import { useState } from 'react';


function AnswerBox({answer, nextQuestion,tags, handleData}) {

    const handleClick = () => {
        handleData(nextQuestion, tags);
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