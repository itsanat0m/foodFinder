import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import qData from '../data/qData';


function QuestionBox() {
    const [qNum, setQNum] = useState("GEN Question 1");
    const selectedQ = qData.find(question => question.id == qNum);
    const [userTags, setUserTags] = useState([]);
    const navigate = useNavigate();

    function handleChange(tags, num) {
        setQNum(num);
        setUserTags(prevTags => [...prevTags, ...tags]);

        console.log(userTags)
        if (num == "Send to display") {
            navigate('/display', {
                state: { tags: userTags }
            });
        }
    }

    function handleMultiChange(tags) {
        setUserTags(prevTags => [...prevTags, ...tags]);
    }

    return (
        <>
        <Question question={selectedQ.Q} answers={selectedQ.Answers} passA={handleChange} passAM={handleMultiChange} type={selectedQ.Type}/>
        </>
    )
}

export default QuestionBox;