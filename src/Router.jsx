import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import TopButton from "./components/TopButton/TopButton";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />

                {/* 404 Error */}
                {/* <Route path="/*" element={<NotFound />} /> */}
            </Routes>
            <TopButton />
        </BrowserRouter>
    );
};

export default Router;
