import { Route, Routes } from "react-router-dom";
import Navber from "./component/Navbar";
import Main from "./page/Main";
import About from "./page/About";
import News from "./page/News";

export default function App() {

    return (
    <div className="wrap">
        <Navber/>
        <hr />
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="news" element={<News/>}></Route>
        </Routes>
    </div>

    )
}
