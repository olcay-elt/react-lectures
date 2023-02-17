// import "./scss/_button.scss"
// import "./scss/_reset.scss"
// import "./scss/_variable.scss"

import "./App.scss"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import data from "./data"

function App() {
    return (
        <div >
            <Header />
            <Card data={data} />
            <Footer />
        </div>
    );
}

export default App;
