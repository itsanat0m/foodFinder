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
                    {answers.map(answer => cloneElement(answer, { handleData, handleMultiData, type }))
                    }
                </div>
                <button onClick={handleClick}>Submit</button>
            </>
        );
    }
    return (
        <>
            <h1>{question}</h1>
            <div className="ram-wrapper">
              <img className="default-ram" src="assets/ramChef.png" alt="Chef Rami" ></img>
            </div>
            <div>
                {answers.map(answer => cloneElement(answer, { handleData, handleMultiData, type }))}
            </div>
        </>
    );

}

export default Question;