import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import RickMorty from "./RickMorty";
import Pokemon from "./Pokemon";

import '../store/css/Main.css'

export default function MainApp() {
    return(
        <>
            <Navbar></Navbar>
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/rickMorty" element={ <RickMorty/> }/>
                <Route path="/pokemon" element={ <Pokemon/> }/>
            </Routes>
        </>
    )
}