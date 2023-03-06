import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import ContainerSSS from "./components/styles/ContainerSSS";

const style = {
    colors: {
        logo: "orange",
        header: "lightblue",
    },
    responsive: "724px"
};

const App = () => {
    return (
        <ThemeProvider theme={style}>
            <ContainerSSS>
                <Header />
                <Card />
            </ContainerSSS>
        </ThemeProvider>
    );
};

export default App;
