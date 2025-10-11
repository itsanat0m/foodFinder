import AnswerBox from "../components/AnswerBox"

const qData = [
    {
        "id" : "Question 1",
        "Q" : "How would you like to dine today?",
        "Answers" : (
            <div>
                <AnswerBox answer={"Dine in"} nextQuestion={2} sendData={handleData}/>
                <AnswerBox answer={"Fast Food"} />
            </div>
        )
    }
]