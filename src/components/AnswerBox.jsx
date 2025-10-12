import { useState } from 'react';
import './AnswerBox.css';

function AnswerBox({ answer, nextQuestion, tags, handleData }) {

    const handleClick = () => {
        handleData(nextQuestion, tags);
    }

    return (
        <div className="button-container">
            <div className='answerBox'>
                <button onClick={handleClick} style={{ display: 'inline-block', position: 'center', padding: '10px 20px', margin: '10px', borderRadius: '8px', border: '1px solid #080774ff', backgroundColor: '#90beedff', cursor: 'pointer', fontSize: '1rem', color: '#111827', boxShadow: '0 2px 6px rgba(16, 24, 40, 0.06)' }}>
                    {answer}
                </button>
            </div>
        </div>
    );
}

export default AnswerBox;