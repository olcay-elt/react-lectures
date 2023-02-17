import "./Card.scss"
//! react jsx alanında (return den sonra) döngü olarak sadece map e izin verilir, condition olarakta ternary ye izin verilir

const Card = ({ data }) => {
    console.log(data);
    // bu return react in ekrana bastirma return ü
    return (
        <div className="konteynir">
            {data.map((veri) => {
                const { name, job, img, comment } = veri;
                {/* bu return ise mapte süslü kullandigimiz icin */ }
                return (
                    <div className="kart">
                        <h1>{name}</h1>
                        <h2>{job}</h2>
                        <p>{comment}</p>
                        <img src={img} alt="" />

                        <div className="btn-konteynir">
                            <button className=" btn-konteynir-small">Small</button>
                            <button className=" btn-konteynir--large">Large</button>
                        </div>
                    </div>
                )


            })}



        </div>
    )
}

export default Card