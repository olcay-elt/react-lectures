import { useState } from "react";

const Hooks = () => {
    const [sayac, setSayac] = useState(0);
    const [people, setPeople] = useState({
        isim: "Sefa",
        email: "sefa@hotmail.com",
        yas: 34,
        renk: "green"
    });

    const arttir = () => {
        setSayac(sayac + 1);
    };

    const degistir = () => {
        if (people.renk === "green") {
            setPeople({
                isim: "Olcay",
                email: "olcay@hotmail.com",
                yas: 25,
                renk: "orange"
            });
        }
        else {
            setPeople({
                isim: "Sefa",
                email: "sefa@hotmail.com",
                yas: 34,
                renk: "green"
            })
        }
    };
    return (
        <div className="container">
            <h2>*****************************************************</h2>

            <h1>USESTATE</h1>
            <h2>
                {" "}
                COUNT: <span>{sayac}</span>
            </h2>

            <button onClick={arttir} className="btn btn-primary">
                ARTTIR
            </button>

            <button onClick={() => setSayac(sayac - 1)} className="btn btn-warning">
                AZALT
            </button>
            <h1>#######################################################</h1>
            <div className="text-center">
                <h1 className="text-danger">OBJECT İLE USESTATE KULLANIMI</h1>

                <h2>{people.isim}</h2>

                <h5>{people.email}</h5>

                <h5>{people.yas}</h5>

                <button onClick={degistir} className="btn btn-primary">
                    DEGISTIR
                </button>
            </div>
        </div>
    );
};

export default Hooks;
