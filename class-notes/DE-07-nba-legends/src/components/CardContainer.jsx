import Container from "react-bootstrap/esm/Container"
import { data } from "../helpers/data"
import PlayerCard from "./PlayerCard";
import Row from "react-bootstrap/Row"

const CardContainer = () => {
    return (
        <Container>
            <Row gap-3 justify-content-center>
                {data.map((player) => 
            return (
                    <col key={i} md={6} lg={4} xl={3}>
                        <PlayerCard {...player} />
                    </col>
                );
                })}
            </Row>
        </Container>
    )
};
export default CardContainer;