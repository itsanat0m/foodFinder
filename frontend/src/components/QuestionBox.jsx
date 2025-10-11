import { useState } from 'react';
import Question from './Question';
import qData from '../data/qData';


function QuestionBox() {
    const [qNum, setQNum] = useState(0);
    const selectedQ = qData[qNum];
    const [userTags, setUserTags] = useState([]);
    function handleChange(tags, num) {
        setQNum(num);
        setUserTags(prevTags => [...prevTags, ...tags]);
    }

    function handleMultiChange(tags) {
        setUserTags(prevTags => [...prevTags, ...tags]);
    }

    return (
        <>
        <img>Placeholder</img>
        <Question question={selectedQ.Q} answers={selectedQ.Answers} passA={handleChange} passAM={handleMultiChange} type={selectedQ.Type}/>
        </>
    )
}

export default QuestionBox;