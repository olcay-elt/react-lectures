import { useState } from "react";
import Card from "react-bootstrap/Card";
const PlayerCard = ({ name, img, statistics }) => {
    const [showImage, setShowImage] = useState(true);
    // const { name, img, statistics } = props
    const handleClick = () => setShowImage(!showImage);
    return (
        <Card
            className="rounded-2 m-auto player-card"
            onClick={handleClick}
            //   onClick={() => setShowImage(!showImage)}
            role="button"
        >
            {showImage && (
                <Card.Img variant="top" src={img} className="player-logo" />
            )}

            {!showImage && (
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
            {/* {showImage ? (
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
      )} */}
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    );
};
export default PlayerCard;
