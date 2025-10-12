import AnswerBox from "../components/AnswerBox"

export const qData = [
    {
        "id": "GEN Question 1",
        "Q": "Who's eating?",
        "type": "single",
        "Answers": [
                <AnswerBox answer={"Just Me"} nextQuestion={"GEN Question 3"} tags={["single"]} />,
                <AnswerBox answer={"Friends"} nextQuestion={"MULT Question 2"} tags={["multi-person"]} />,
                <AnswerBox answer={"Family"}  nextQuestion={"MULT Question 2"} tags={["multi-person"]} />,
                <AnswerBox answer={"Couple"}  nextQuestion={"COUPLE Question 1"} tags={["multi-person"]} />,
                <AnswerBox answer={"Other"}  nextQuestion={"MULT Question 2"} tags={["multi-person"]} />,

        ],
    },
    {

        "id": "COUPLE Question 1",
        "Q": "You must promise to go where I say",
        "type": "single",
        "Answers": [
                <AnswerBox answer={"I promise"} nextQuestion={"MULT Question 2"} tags={[""]}/>,
                <AnswerBox answer={"Mmm can't say for sure"} nextQuestion={"try again"} tags={[""]}/>,
        ],
    },
    {

        "id": "MULT Question 2", // Budget question needs implement a tag, 
        "Q": "Budget per person?",
        "type": "single",
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
        "type": "single",
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
    },
    {
        "id": "GEN Question 5",
        "Q": "Cuisine in mind?",
        "type": "Multi",
        "Answers": [
                <AnswerBox answer={"American"} nextQuestion={"GEN Question 6"} tags={["american"]}/>,
                <AnswerBox answer={"Italian"} nextQuestion={"GEN Question 6"} tags={["european"]}/>,
                <AnswerBox answer={"Latin"} nextQuestion={"GEN Question 6"} tags={["latin"]}/>,
                <AnswerBox answer={"Mediterranean"} nextQuestion={"GEN Question 6"} tags={["med-deli"]}/>,
                <AnswerBox answer={"Chinese"} nextQuestion={"GEN Question 6"} tags={["asian"]}/>,
                <AnswerBox answer={"Indonesian"} nextQuestion={"GEN Question 6"} tags={["asian"]}/>,
                <AnswerBox answer={"Fusion"} nextQuestion={"GEN Question 6"} tags={["asian", "american", "european", "latin","med-deli"]}/>,
                <AnswerBox answer={"I don't know"} tag={[]}/>,

        ],
    },
    {

        "id": "GEN Question 6",
        "Q": "What flavors are you looking for?",
        "type": "Multi",
        "Answers": [
                <AnswerBox answer={"Sweet"} nextQuestion={"GEN Question 7"} tags={["sweet"]}/>,
                <AnswerBox answer={"Savory"} nextQuestion={"GEN Question 7"} tags={["savory"]}/>,
                <AnswerBox answer={"Sour"} nextQuestion={"GEN Question 7"} tags={["sour"]}/>,
                <AnswerBox answer={"Tangy"} nextQuestion={"GEN Question 7"} tags={["tangy"]}/>,
                <AnswerBox answer={"Salty"} nextQuestion={"GEN Question 7"} tags={["salty"]}/>,
                <AnswerBox answer={"Bitter"} nextQuestion={"GEN Question 7"} tags={["bitter"]}/>,
                <AnswerBox answer={"Spicy"} nextQuestion={"GEN Question 7"} tags={["spicy"]}/>,
                <AnswerBox answer={"Rich"} nextQuestion={"GEN Question 7"} tags={["rich"]}/>,
                <AnswerBox answer={"Earthy"} nextQuestion={"GEN Question 7"} tags={["earthy"]}/>,
                <AnswerBox answer={"Fruity"} nextQuestion={"GEN Question 7"} tags={["fruity"]}/>,
                <AnswerBox answer={"Smoky"} nextQuestion={"GEN Question 7"} tags={["smoky"]}/>,
                <AnswerBox answer={"Other/None"} nextQuestion={"GEN Question 7"} tags={[]}/>,
        ],
    },
    {

        "id": "GEN Question 7",
        "Q": "What foods are you looking for?",
        "type": "Multi",
        "Answers": [
                <AnswerBox answer={"Burgers"} nextQuestion={"GEN Question 8"} tags={["burgers"]}/>,
                <AnswerBox answer={"Chicken"} nextQuestion={"GEN Question 8"} tags={["chicken"]}/>,
                <AnswerBox answer={"Steak"} nextQuestion={"GEN Question 8"} tags={["steak"]}/>,
                <AnswerBox answer={"Sushi"} nextQuestion={"GEN Question 8"} tags={["sushi"]}/>,
                <AnswerBox answer={"Salad"} nextQuestion={"GEN Question 8"} tags={["salad"]}/>,
                <AnswerBox answer={"Bisctuits"} nextQuestion={"GEN Question 8"} tags={["biscuits"]}/>,
                <AnswerBox answer={"Bagel"} nextQuestion={"GEN Question 8"} tags={["bagel"]}/>,
                <AnswerBox answer={"Seafood"} nextQuestion={"GEN Question 8"} tags={["seafood"]}/>,
                <AnswerBox answer={"Pasta"} nextQuestion={"GEN Question 8"} tags={["pasta"]}/>,
                <AnswerBox answer={"Tacos"} nextQuestion={"GEN Question 8"} tags={["tacos"]}/>,
                <AnswerBox answer={"Burritos"} nextQuestion={"GEN Question 8"} tags={["burritos"]}/>,
                <AnswerBox answer={"Pizza"} nextQuestion={"GEN Question 8"} tags={["pizza"]}/>,
        ],
    },
    {
        "id" : "GEN Question 8",
        "Q" : "What type of dining experience are you looking for?",
        "type" : "Multi",
        "Answers" : [
                <AnswerBox answer={"Dine in"} nextQuestion={"Send to display"} tags={["sit-down"]}/>,
                <AnswerBox answer={"Take out"} nextQuestion={"Send to display"} tags={["to-go"]}/>,
                <AnswerBox answer={"Bar"} nextQuestion={"Send to display"} tags={["bar"]}/>,
                <AnswerBox answer={"Drive Through"} nextQuestion={"Send to display"} tags={["to-go"]}/>,
                <AnswerBox answer={"Fast Food"} nextQuestion={"Send to display"} tags={["sit-down"]}/>,
                <AnswerBox answer={"Cafe"} nextQuestion={"Send to display"} tags={["sit-down"]}/>,
                <AnswerBox answer={"Buffet"} nextQuestion={"Send to display"} tags={["sit-down"]}/>,
                <AnswerBox answer={"Food Truck"} nextQuestion={"Send to display"} tags={["to-go"]}/>,
            ]
    }
]

export default qData;
