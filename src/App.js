import styled from 'styled-components';
import './reset.css';
import {Route, Routes, useLocation} from "react-router";
import Header from "./Components/Header";
import AppInfoPage from "./Components/AppInfoPage";
import GalleryPage from "./Components/GalleryPage";
import MainPage from "./Components/MainPage";

function App() {
    const a = useLocation();
    console.log(a);

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<MainPage />} />

                {/*<Route path="/teams/:id" element={<Teams />}/>*/}
                {/*<Route exact path="/employers/:id" element={<Profile />}/>*/}
            </Routes>
        </div>
    );
}

export default App;
