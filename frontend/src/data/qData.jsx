import AnswerBox from "../components/AnswerBox"

export const qData = [
    {
        "id": "GEN Question 1",
        "Q": "Who's eating?",
        "Answers": [
                <AnswerBox answer={"Just Me"} nextQuestion={"GEN Question 2"} tags={["single"]} />,
                <AnswerBox answer={"Friends"} nextQuestion={"GEN Question 2"} tags={["mult-person"]} />,
                <AnswerBox answer={"Family"}  nextQuestion={"GEN Question 2"} tags={["mult-person"]} />,
                <AnswerBox answer={"Couple"}  nextQuestion={"COUPLE Question 1 (2)"} tags={["mult-person"]} />,
                <AnswerBox answer={"Other"}  nextQuestion={"GEN Question 2"} tags={["mult-person"]} />,

        ],
    },
    {

        "id": "COUPLE Question 1 (2)",
        "Q": "You must promise to go where I say",
        "Answers": [
                <AnswerBox answer={"I promise"} nextQuestion={"GEN Question 2"} tags={[""]}/>,
                <AnswerBox answer={"Mmm can't say for sure"} nextQuestion={"try again"} tags={[""]}/>,
        ],
    },
    {

        "id": "GEN Question 2", // Budget question needs implement a tag, 
        "Q": "Budget per person?",
        "Answers": [
                <AnswerBox answer={"<$10"} nextQuestion={"GEN Question 3"}  tags={["cheap"]}/>,
                <AnswerBox answer={"$10 - $15"} nextQuestion={"GEN Question 3"} tags={["econmical"]}/>,
                <AnswerBox answer={"$15 - $25"} nextQuestion={"GEN Question 3"} tags={["mid-range"]}/>,
                <AnswerBox answer={"+$30"} nextQuestion={"GEN Question 3"} tags={["expensive"]}/>
        ],
    },
    {

        "id": "GEN Question 3",
        "Q": "Distance willing to travel?",
        "Answers": [
                <AnswerBox answer={"Walking only (<2 miles)"} nextQuestion={"GEN Question 4"} tags={["close"]}/>,
                <AnswerBox answer={"Driving (>2 miles)"} nextQuestion={"GEN Question 4"} tags={["far"]}/>,
        ],
    },
    {
        //TODO: Figure out how we want to do Timing with opening hours
        "id": "GEN Question 4", // Meal question needs implement a tag,
        "Q": "Which meal do you want?",
        "Answers": [
                <AnswerBox answer={"Breakfast"} nextQuestion={"GEN Question 5"} tags={["breakfast"]}/>,
                <AnswerBox answer={"Lunch"} nextQuestion={"GEN Question 5"} tags={["lunch"]}/>,
                <AnswerBox answer={"Dinner"} nextQuestion={"GEN Question 5"} tags={["dinner"]}/>,
                <AnswerBox answer={"Late Night"} nextQuestion={"GEN Question 5"} tags={["late-night"]}/>

        ],
    }
]

export default qData;