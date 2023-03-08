import React from "react";
import {
    FormContainer,
    Header,
    LoginContainer,
    StyledButton,
    StyledForm,
    StyledImg,
    StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";

const Login = () => {
    return (
        <LoginContainer>
            <FormContainer>
                <StyledImg src={mealSvg} />
                <Header>{"<Clarusway/>"}Recipe</Header>

                <StyledForm>
                    <StyledInput type="text" placeholder="username" required />

                    <StyledInput type="password" placeholder="password" required />

                    <StyledButton type="submit">Login</StyledButton>
                </StyledForm>
            </FormContainer>
        </LoginContainer>
    );
};

export default Login;





function User({ name, surname, age }) {
    return (
        <div>
            <h1>
                {islogged ? ` ${name} ${surname}` : "lutfen"}
            </h1>

            {friends.map((friend) => {
                return <div key={friends.id}>
                    {

                    }

                </div>
            })}
        </div>
    )
}