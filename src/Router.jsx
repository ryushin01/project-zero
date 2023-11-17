import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
// import NotFound from './pages/NotFound/NotFound';
// import InitializeScroll from './components/InitializeScroll/InitializeScroll';

const Router = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Main />} />

                {/* 404 Error */}
                {/* <Route path="/*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
