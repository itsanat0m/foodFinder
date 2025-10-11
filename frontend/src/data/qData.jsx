import AnswerBox from "../components/AnswerBox"

export const qData = [
    {
        "id": "GEN Question 1",
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
    },
    {

        "id": "COUPLE Question 1",
        "Q": "You must promise to go where I say",
        "Answers": (
            <div>
                <AnswerBox answer={"I promise"} nextQuestion={2} sendData={handleData} />
                <AnswerBox answer={"Mmm can't say for sure"} />
            </div>
        ),
    },
    {

        "id": "GEN Question 2", // Budget question needs implement a tag, 
        "Q": "Budget per person?",
        "Answers": (
            <div>
                <AnswerBox answer={"<$10"} nextQuestion={2} sendData={handleData} />
                <AnswerBox answer={"$10 - $15"} />
                <AnswerBox answer={"$15 - $25"} />
                <AnswerBox answer={"+$30"} />
            </div>
        ),
    },
    {

        "id": "GEN Question 3", // Meal question needs implement a tag,
        "Q": "Which meal do you want?",
        "Answers": (
            <div>
                <AnswerBox answer={"Breakfast"} />
                <AnswerBox answer={"Lunch"} />
                <AnswerBox answer={"Dinner"} />
                <AnswerBox answer={"Late Night"} />
            </div>

        ),
    },
    {

        "id": "GEN Question 4",
        "Q": "Distance willing to travel?",
        "Answers": (
            <div>
                <AnswerBox answer={"Walking only (<10 minutes)"} />
                <AnswerBox answer={"Lunch"} />
                <AnswerBox answer={"Dinner"} />
                <AnswerBox answer={"Late Night"} />
            </div>

        ),
    }
]

export default qData;