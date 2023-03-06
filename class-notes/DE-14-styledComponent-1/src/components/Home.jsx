import ButonStyle, { DomatesButon } from "./styles/ButonStyle";
import ContainerStyle from "./styles/ContainerStyle";
import HeaderStyle, { LinkStyle } from "./styles/HeaderStyle";


const Home = () => {
    return (
        <ContainerStyle>

            <HeaderStyle>STYLED COMPONENT</HeaderStyle>
            <LinkStyle>LINK TIKLA</LinkStyle>

            <ButonStyle sefa>TIKLA1</ButonStyle>

            <ButonStyle >TIKLA2</ButonStyle>

            <DomatesButon mehmet>TIKLA3</DomatesButon>

            <DomatesButon>TIKLA4</DomatesButon>

        </ContainerStyle>
    );
}

export default Home