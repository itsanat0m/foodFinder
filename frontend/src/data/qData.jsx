import AnswerBox from "../components/AnswerBox"

export const qData = [
    {
        "id": "GEN Question 1",
        "Q": "Who's eating?",
        "type": "single",
        "Answers": [
                <AnswerBox answer={"Just Me"} nextQuestion={"GEN Question 2"} tags={["sushi"]} />,
                <AnswerBox answer={"Friends"} nextQuestion={3} tags={[]} />,
                <AnswerBox answer={"Family"}  nextQuestion={3} tags={[]} />,
                <AnswerBox answer={"Couple"}  nextQuestion={2} tags={[]} />,
                <AnswerBox answer={"Other"}  nextQuestion={3} tags={[]} />,

        ],
    },
    {

        "id": "COUPLE Question 1",
        "Q": "You must promise to go where I say",
        "type": "single",
        "Answers": [
                <AnswerBox answer={"I promise"} nextQuestion={"MULT Question 2"} />,
                <AnswerBox answer={"Mmm can't say for sure"} nextQuestion={"MULT Question 2"}/>,
        ],
    },
    {

        "id": "GEN Question 2", // Budget question needs implement a tag, 
        "Q": "What is your Budget?",
        "type": "single",
        "Answers": [
                <AnswerBox answer={"<$10"} nextQuestion={"GEN Question 3"} tags={["<10"]}  />,
                <AnswerBox answer={"$10 - $15"} />,
                <AnswerBox answer={"$15 - $25"} />,
                <AnswerBox answer={"+$30"} />
        ],
    },
    {

        "id": "MULT Question 2", // Budget question needs implement a tag, 
        "Q": "Budget per person?",
        "type": "single",
        "Answers": [
                <AnswerBox answer={"<$10"} nextQuestion={"GEN Question 3"} tags={["<10"]}  />,
                <AnswerBox answer={"$10 - $15"} />,
                <AnswerBox answer={"$15 - $25"} />,
                <AnswerBox answer={"+$30"} />
        ],
    },
    {
        //TODO: Figure out how we want to do Timing with opening hours
        "id": "GEN Question 3", // Meal question needs implement a tag,
        "Q": "Which meal do you want?",
        "type": "single",
        "Answers": [
                <AnswerBox answer={"Breakfast"} nextQuestion={"GEN Question 4"}/>,
                <AnswerBox answer={"Lunch"} />,
                <AnswerBox answer={"Dinner"} />,
                <AnswerBox answer={"Late Night"} />

        ],
    },
    {

        "id": "GEN Question 4",
        "Q": "Distance willing to travel?",
        "type": "single",
        "Answers": [
                <AnswerBox answer={"Walking only (<10 minutes)"} nextQuestion={"GEN Question 5"}/>,
                <AnswerBox answer={"Lunch"} />,
                <AnswerBox answer={"Dinner"} />,
                <AnswerBox answer={"Late Night"} />,
        ],
    },
    {
        "id": "GEN Question 5",
        "Q": "Cuisine in mind?",
        "type": "Multi",
        "Answers": [
                <AnswerBox answer={"Brunch"} nextQuestion={"GEN Question 6"}/>,
                <AnswerBox answer={""} />,
                <AnswerBox answer={""} />,
                <AnswerBox answer={"I don't know"} />,

        ],
    },
    {

        "id": "GEN Question 6",
        "Q": "What flavors are you looking for?",
        "type": "Multi",
        "Answers": [
                <AnswerBox answer={"Sweet"} nextQuestion={"GEN Question 6"} tags={["sweet"]}/>,
                <AnswerBox answer={"Savory"} nextQuestion={"GEN Question 6"} tags={["savory"]}/>,
                <AnswerBox answer={"Sour"} nextQuestion={"GEN Question 6"} tags={["sour"]}/>,
                <AnswerBox answer={"Tangy"} nextQuestion={"GEN Question 6"} tags={["tangy"]}/>,
                <AnswerBox answer={"Salty"} nextQuestion={"GEN Question 6"} tags={["salty"]}/>,
                <AnswerBox answer={"Bitter"} nextQuestion={"GEN Question 6"} tags={["bitter"]}/>,
                <AnswerBox answer={"Spicy"} nextQuestion={"GEN Question 6"} tags={["spicy"]}/>,
                <AnswerBox answer={"Rich"} nextQuestion={"GEN Question 6"} tags={["rich"]}/>,
                <AnswerBox answer={"Earthy"} nextQuestion={"GEN Question 6"} tags={["earthy"]}/>,
                <AnswerBox answer={"Fruity"} nextQuestion={"GEN Question 6"} tags={["fruity"]}/>,
                <AnswerBox answer={"Smoky"} nextQuestion={"GEN Question 6"} tags={["smoky"]}/>,
                <AnswerBox answer={"Other/None"} nextQuestion={"GEN Question 6"} tags={[]}/>,
        ],
    },
    {

        "id": "GEN Question 6",
        "Q": "What foods are you looking for?",
        "type": "Multi",
        "Answers": [
                <AnswerBox answer={"Burgers"} nextQuestion={"GEN Question 6"} tags={["burgers"]}/>,
                <AnswerBox answer={"Chicken"} nextQuestion={"GEN Question 6"} tags={["chicken"]}/>,
                <AnswerBox answer={"Steak"} nextQuestion={"GEN Question 6"} tags={["steak"]}/>,
                <AnswerBox answer={"Sushi"} nextQuestion={"GEN Question 6"} tags={["sushi"]}/>,
                <AnswerBox answer={"Salad"} nextQuestion={"GEN Question 6"} tags={["salad"]}/>,
                <AnswerBox answer={"Bisctuits"} nextQuestion={"GEN Question 6"} tags={["biscuits"]}/>,
                <AnswerBox answer={"Bagel"} nextQuestion={"GEN Question 6"} tags={["bagel"]}/>,
                <AnswerBox answer={"Seafood"} nextQuestion={"GEN Question 6"} tags={["seafood"]}/>,
                <AnswerBox answer={"Pasta"} nextQuestion={"GEN Question 6"} tags={["pasta"]}/>,
                <AnswerBox answer={"Tacos"} nextQuestion={"GEN Question 6"} tags={["tacos"]}/>,
                <AnswerBox answer={"Burritos"} nextQuestion={"GEN Question 6"} tags={["burritos"]}/>,
                <AnswerBox answer={"Pizza"} nextQuestion={"GEN Question 6"} tags={["pizza"]}/>,
        ],
    },
]

export default qData;