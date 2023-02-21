const Events = () => {
    //!javascript alanı
    let baslik = "MERHABA";
    let sayac = 0;

    const arttir = () => {
        sayac = sayac + 1;
        document.querySelector("span").textContent = sayac;
    };
    const tarih = (parametre) => {
        document.querySelector(".btn-danger").textContent = parametre;
    };

    return (
        //!react (jsx) alanı
        <div className="container text-center mt-4">
            <h1>INFO:{baslik}</h1>
            <h2>
                COUNT: <span>{sayac}</span>
            </h2>
            <button onClick={arttir} className="btn btn-primary">
                ARTTIR
            </button>

            <button
                onClick={() => tarih(new Date().getFullYear())}
                className="btn btn-danger ms-4"
            >
                TARİHİ GÖSTER
            </button>
        </div>
    );
};

//?------------------------------------------------------------------
//? QUESTION:arttır  butonuna tıklandığında count 1 artmalı

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

export default Events;
