import ContainerStyle from "./styles/ContainerStyle";
import HeaderStyle, { Linkstyle } from "./styles/HeaderStyle";
import ButonStyle, { DomatesButon } from "./styles/Linkstyle";

const Home = () => {
    return (
        <ContainerStyle>
            <HeaderStyle>
                STYLED COMPONENT
            </HeaderStyle>

            <Linkstyle>LINK TIKLA</Linkstyle>
            <ButonStyle>TIKLA1</ButonStyle>
            <ButonStyle>TIKLA1</ButonStyle>

            <DomatesButon>TIKLA3</DomatesButon>
            <DomatesButon>TIKLA4</DomatesButon>

        </ContainerStyle>
    );
}

export default Home