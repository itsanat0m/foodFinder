import { useState } from 'react';


function AnswerBox({answer, nextQuestion, sendData}) {
    const [data, setData] = useState(nextQuestion);

    const handleClick = () => {
        sendData(data);
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