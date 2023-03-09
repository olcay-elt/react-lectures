import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Cards, RecipeHeader, RecipeImage } from "./HomeStyles";

const RecipeCard = ({ yemekler }) => {
    console.log(yemekler);
    let navigate = useNavigate()
    return (
        <>
            {yemekler.map((i, index) => (

                <Cards key={index}>
                    <RecipeHeader>{i.recipe.label}</RecipeHeader>
                    <RecipeImage src={i.recipe.image} />
                    <Button onClick={() => { navigate("/details", { state: { i } }) }}>Details</Button>
                </Cards>
            ))}
        </>
    );
};

export default RecipeCard;
