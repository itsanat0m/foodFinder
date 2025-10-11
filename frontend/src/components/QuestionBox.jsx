import { useState } from "react";
import PropTypes from "prop-types";

export default function QuestionBox({
    question = "what is your favorite food?", // These values are default/placeholder
    options = ["Pizza", "Sushi", "Burgers", "Salad"],
    initialIndex = -1, // -1 means no option selected
    onSelect, // function that takes (index, option), callback when an option is selected
}) {


}