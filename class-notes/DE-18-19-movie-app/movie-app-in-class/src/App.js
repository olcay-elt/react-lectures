import React from "react";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";


const App = () => {
    return (
        <div className="dark:bg-gray-dark-main">
            <AuthContextProvider>
                <MovieContextProvider>
                    <AppRouter />
                    <ToastContainer />
                </MovieContextProvider>
            </AuthContextProvider>
        </div>
    );
};
export default App;
