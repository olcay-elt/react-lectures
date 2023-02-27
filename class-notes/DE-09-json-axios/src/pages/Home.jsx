import { useEffect, useState } from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
import axios from "axios";
const Home = () => {
    const [bilgiler, setBilgiler] = useState([]);

    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

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

    useEffect(() => {
        getBilgiler();
    }, []);

    //!POST (create) database e veri gönderme
    const postBilgi = async (yeniVeri) => {
        await axios.post(url, yeniVeri)
        getBilgiler();

    }

    //!post işlemi ile database e veriler gitti ama ekranda eski bilgiler dizisi basılı, tekrar databaseden güncel verileri çekip bilgiler dizisini yeniledik, dolayısıyla ekran tetiklendi, yeni bilgiler göründü
    return (
        <>
            <AddBilgi postBilgi={postBilgi} />

            <BilgiList bilgiler={bilgiler} getBilgiler={getBilgiler} />
        </>
    );
};

export default Home;
