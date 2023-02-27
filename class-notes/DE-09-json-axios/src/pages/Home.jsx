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

    // console.log(bilgiler);
    return (
        <>
            <AddBilgi />

            <BilgiList bilgiler={bilgiler} />
        </>
    );
};

export default Home;