import { useState } from 'react';


function answerBox({answer, nextQuestion, sendData}) {
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