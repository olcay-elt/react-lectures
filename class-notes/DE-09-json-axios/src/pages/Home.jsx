import { useEffect, useState } from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
import axios from "axios";
const Home = () => {
    const [bilgiler, setBilgiler] = useState([]);

    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    //!burada bir dizi oluşturup database deki dataları buradaki dizime attım, ve buradaki bilgiler dizisini BilgiList componentinde ekrana bastıracağım database deki her değişiklikte bu işlemi tekrar ederek kendi dizimi (ekrana bastıracağım bilgiler dizisini) güncellemiş oldum
    //!GET (Read)
    const getBilgiler = async () => {
        const { data } = await axios.get(url);
        // console.log(data);
        setBilgiler(data);
    };
    //!then zinciriyle de yazabilirsiniz
    // axios
    //   .get(url)
    //   .then((res) => setBilgiler(res.data))
    //   .catch((error) => console.log(error));

    //? Sadece Component mount oldugunda istek yapar
    useEffect(() => {
        getBilgiler();
    }, []);

    //! postBilgi fonksiyonu (post işlemi için) AddBilgi componentinde çalışmalı, çünkü verileri gireceğimiz inputlu form yapısı orada. bu yüzden mecburen Home da tanımladığım postBilgi fonksiyonunu child a (AddBilgi ye) yolluyorum props la. post işlemi bütün hatlarıyla child da artık, orada inputlara girilen veri submit edildiği anda buraya düşer ve post sayesinde database e kaydolur
    //!POST (create) database e veri gönderme
    const postBilgi = async (yeniVeri) => {
        await axios.post(url, yeniVeri);
        getBilgiler();
    };

    //!post işlemi ile database e veriler gitti ama ekranda eski bilgiler dizisi basılı, tekrar databaseden güncel verileri çekip bilgiler dizisini yeniledik, dolayısıyla ekran tetiklendi, yeni bilgiler göründü
    return (
        <>
            <AddBilgi postBilgi={postBilgi} />
            {/* buradaki postBilgi fonksiyonu Addbilgi deki verilerle çalışacak, o yüzden postBilgi yi gönderdik */}
            <BilgiList bilgiler={bilgiler} getBilgiler={getBilgiler} />
            {/* bilgiler dizisi BilgiList te ekrana bastırılacak.  BilgiList te delete fonksiyonuyla database den veri sildikten sonra buradaki bilgiler dizisine database deki güncel bilgiler gelsin ve ekran güncellensin diye getBilgiler i yolluyorum */}
        </>
    );
};

export default Home;
