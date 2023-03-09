import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Cards, RecipeHeader, RecipeImage } from "./HomeStyles";

const RecipeCard = ({ i }) => {
    console.log(i);
    let navigate = useNavigate
    return (
        <Cards>
            <RecipeHeader>{i.label}</RecipeHeader>
            <RecipeImage src={i.image} />
            <Button onClick={() => { navigate("/details", { state: { i } }) }}

            >
                Details
            </Button>
        </Cards>
    );
};

export default RecipeCard;
