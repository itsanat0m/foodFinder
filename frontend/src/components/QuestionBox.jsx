import { useState } from 'react';
import Question from './Question';
import qData from '../data/qData';


function QuestionBox() {
    const [qNum, setQNum] = useState(0);
    const selectedQ = qData[qNum];
    function handleChange(num) {
        setQNum(num);
    }

    return (
        <>
        <img>Placeholder</img>
        <Question question={selectedQ.Q} answers={selectedQ.Answers} passA={handleChange}/>
        </>
    )
}

export default QuestionBox;