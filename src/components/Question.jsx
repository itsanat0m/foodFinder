import { useState } from "react";
import { cloneElement } from "react";


function Question({ question, answers, passA, passAM, type }) {
    const [num, setNum] = useState("");

    function handleData(num, tags) {
        passA(tags, num);
    }
    function handleMultiData(num, tags) {
        setNum(num);
        passAM(tags);
    }
    function handleClick() {
        passA([], num);
    }

    if (type == "Multi") {
        return (
            <>
                <h1 style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                }}>
                    {question}</h1>
                    <p>(Select multiple and then hit submit!)</p>
                <div>
                    {answers.map(answer => cloneElement(answer, { handleMultiData }))
                    }
                </div>
                <button onClick={handleClick}>Submit</button>
            </>
        );
    }
    return (
        <>
            <h1>{question}</h1>
            <div>
                {answers.map(answer => cloneElement(answer, { handleData }))}
            </div>
        </>
    );

}

export default Question;