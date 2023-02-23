import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
const CardContainer = () => {
    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <>
            <Form.Control
                placeholder="Search Player..."
                className="w-50 m-auto"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <Container className="rounded-4 my-4 p-3 card-container">
                <Row className="g-3 justify-content-center">
                    {data.map((player, i) => {
                        return (
                            <Col key={i} md={6} lg={4} xl={3}>
                                <PlayerCard {...player} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};
export default CardContainer;