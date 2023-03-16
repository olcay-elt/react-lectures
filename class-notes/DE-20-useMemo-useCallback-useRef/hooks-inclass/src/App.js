import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";
import Card from "./components/Card";
import ClearButton from "./components/ClearButton";

function App() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState("anthony");
    const [tax, setTax] = useState({ taxRate: 0.18, ship: 25 });
    const [data, setData] = useState([]);

    const [search, setSearch] = useState("");

    const taxData = { taxRate: 0.18, ship: 25 };

    const taxDataRef = useRef({ taxRate: 0.18, ship: 25 });

    // console.log(taxDataRef.current)

    const getData = useCallback(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((res) => setData(res.products));
    }, [])

    useEffect(() => {
        getData()
    }, [getData]);

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    // const filteredData = data.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()))

    const filteredData = useMemo(() => {
        console.log("useMemo çalıştı..");
        return data.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);

    // const calculation1 = expensiveCalculation1(count)
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    // const handleClear = () =>{
    //   setUser("")
    //   setSearch("")
    // }
    const handleClear = useCallback(() => {
        setUser("");
        setSearch("");
    }, []);

    return (
        <div className="container mt-2">
            <div>
                <Header user={user} />{" "}
            </div>
            <hr />
            <div className="">
                <p className="text-center">Count : {count}</p>
                <button
                    className="btn btn-danger d-flex mx-auto"
                    onClick={() => setCount(count + 1)}>
                    Increment
                </button>
                <button
                    className="btn btn-danger d-flex mx-auto"
                    onClick={() => setUser("olcay")}>
                    Change User
                </button>
            </div>
            <hr />
            {/* <HeaderMemo count={count} /> */}
            <hr />
            {/* <TaxComp taxData={taxData} /> */}
            {/* <TaxComp taxData={taxDataRef}  /> */}
            <hr />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input type="text" value={search} onChange={handleSearch} />
                <button type="button">Search</button>
            </div>
            <hr />
            {/* <UseRefComp /> */}
            <hr />
            {/* <Card data={filteredData} /> */}

            <hr />
            <p>{calculation}</p>
            <hr />
            <p>usecallback</p>
            <ClearButton handleClear={handleClear} />
        </div>
    );
}

export default App;

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    console.log("Calculating completed...");
    return num;
};

const expensiveCalculation1 = (num) => {
    console.log("Calculating1...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    console.log("Calculating completed...");
    return num;
};
