import { Route, Routes } from "react-router-dom";
import Navber from "./component/Navbar";
import Main from "./page/Main";
import About from "./page/About";
import News from "./page/News";
import Login from "./page/Login";
import User from "./page/user";

export default function AppNavbar() {

    return (
    <div className="wrap">
        <Navber/>
        <hr />
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/user" element={<User/>} ></Route>
        </Routes>
    </div>

    )
}
