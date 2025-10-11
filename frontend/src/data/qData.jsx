import AnswerBox from "../components/AnswerBox"

const qData = [
    {
        "id": "Question 1",
        "Q": "Who's eating?",
        "Answers": (
            <div>
                <AnswerBox answer={"Just Me"} nextQuestion={2} sendData={handleData} />
                <AnswerBox answer={"Friends"} />
                <AnswerBox answer={"Family"} />
                <AnswerBox answer={"Couple"} />
                <AnswerBox answer={"Other"} />

            </div>
        ),

        "id": "Couple Q1",
        "Q": "You must promise to go where I say",
        "Answers": (
            <div>
                <AnswerBox answer={"I promise"} nextQuestion={2} sendData={handleData} />
                <AnswerBox answer={"Mmm can't say for sure"} />
            </div>
        ),
    }
]

export default qData;