import Card from "react-bootstrap/Card";

const PlayerCard = ({ name, img, statistics }) => {
    // const { name, img, statistics } = props
    const showImage = false;
    return (
        <Card className="rounded-2 m-auto player-card">
            {showImage ? (
                <Card.Img variant="top" src={img} className="player-logo" />
            ) : (
                <ul className="m-auto">
                    {statistics.map((item, i) => {
                        return (
                            <li className="h5 text-start list-unstyled" key={i}>
                                🏀 {item}
                            </li>
                        );
                    })}
                </ul>
            )}
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    );
};
export default PlayerCard;