import { useState } from "react";


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

    if(type == "Multi") {
        return (
            <>
                <h1>{question}</h1>
                <div>
                    {answers}
                </div>
                <button onClick={handleClick}>Submit</button>
            </>
        );
    }
    return (
    <>
        <h1>{question}</h1>
        <div>
            {answers}
        </div>
    </>
    );

}

export default Question;