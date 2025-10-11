import AnswerBox from "../components/AnswerBox"

export const qData = [
    {
        "id": "GEN Question 1",
        "Q": "Who's eating?",
        "Answers": [
                <AnswerBox answer={"Just Me"} nextQuestion={"Send to display"} tags={["burger"]} />,
                <AnswerBox answer={"Friends"} nextQuestion={3} tags={[]} />,
                <AnswerBox answer={"Family"}  nextQuestion={3} tags={[]} />,
                <AnswerBox answer={"Couple"}  nextQuestion={2} tags={[]} />,
                <AnswerBox answer={"Other"}  nextQuestion={3} tags={[]} />,

        ],
    },
    {

        "id": "COUPLE Question 1 (2)",
        "Q": "You must promise to go where I say",
        "Answers": [
                <AnswerBox answer={"I promise"} nextQuestion={2} />,
                <AnswerBox answer={"Mmm can't say for sure"} />,
        ],
    },
    {

        "id": "GEN Question 2", // Budget question needs implement a tag, 
        "Q": "Budget per person?",
        "Answers": [
                <AnswerBox answer={"<$10"} nextQuestion={2}  />,
                <AnswerBox answer={"$10 - $15"} />,
                <AnswerBox answer={"$15 - $25"} />,
                <AnswerBox answer={"+$30"} />
        ],
    },
    {
        //TODO: Figure out how we want to do Timing with opening hours
        "id": "GEN Question 3", // Meal question needs implement a tag,
        "Q": "Which meal do you want?",
        "Answers": [
                <AnswerBox answer={"Breakfast"} />,
                <AnswerBox answer={"Lunch"} />,
                <AnswerBox answer={"Dinner"} />,
                <AnswerBox answer={"Late Night"} />

        ],
    },
    {

        "id": "GEN Question 4",
        "Q": "Distance willing to travel?",
        "Answers": [
                <AnswerBox answer={"Walking only (<10 minutes)"} />,
                <AnswerBox answer={"Lunch"} />,
                <AnswerBox answer={"Dinner"} />,
                <AnswerBox answer={"Late Night"} />,
        ],
    },
    {
        "id": "BREAK Question 1",
        "Q": "Cuisine in mind?",
        "Answers": (
            <div>
                <AnswerBox answer={"Brunch"} />
                <AnswerBox answer={""} />
                <AnswerBox answer={""} />
                <AnswerBox answer={"I don't know"} />
            </div>

        ),
    },
    {

        "id": "LUNCH Question 1",
        "Q": "Cuisine in mind?",
        "Answers": (
            <div>
                <AnswerBox answer={""} />
                <AnswerBox answer={"Mediteranian"} />
                <AnswerBox answer={"Asian"} />
                <AnswerBox answer={"I don't know"} />
            </div>

        ),
    },
    {

        "id": "DINNER Question 1",
        "Q": "Cuisine in mind?",
        "Answers": (
            <div>
                <AnswerBox answer={""} />
                <AnswerBox answer={""} />
                <AnswerBox answer={""} />
                <AnswerBox answer={"I don't know"} />
            </div>

        ),
    },
    {

        "id": "LATE Question 1",
        "Q": "Cuisine in mind?",
        "Answers": (
            <div>
                <AnswerBox answer={""} />
                <AnswerBox answer={""} />
                <AnswerBox answer={""} />
                <AnswerBox answer={"I don't know"} />
            </div>
        ),
    }
]

export default qData;