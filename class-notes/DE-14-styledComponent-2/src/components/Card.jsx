import data from "../data.js";
import ImageSSS from "./styles/ImageSSS.jsx";
import KartSSS from "./styles/KartSSS.jsx";

const Card = () => {
    return (
        <div>
            {data.map((a) => (
              
                    <div>
                        <h2>{a.title} </h2>
                        <p> {a.body} </p>
                    </div>

                    <ImageSSS src={`./images/${a.image}`}></ImageSSS>
                </KartSSS>
    ))
}
        </div >
    );
};

export default Card;
