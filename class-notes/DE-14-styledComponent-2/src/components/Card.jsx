import data from "../data.js";
import ImageSSS from "./styles/ImageSSS.jsx";
import KartSSS from "./styles/KartSSS.jsx";

const Card = () => {
    return (
        <div>
            {data.map((a) => (
                <KartSSS key={a.id} ters={a.id % 2 === 1 && "row-reverse"}>
                    <div>
                        <h2>{a.title} </h2>
                        <p> {a.body} </p>
                    </div>

                    <ImageSSS src={`./images/${a.image}`}></ImageSSS>
                </KartSSS>
            ))}
        </div>
    );
};

export default Card;
