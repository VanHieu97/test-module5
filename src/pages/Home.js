import {Header} from "../component/Header";
import {Navbar} from "../component/Navbar";
import {Footer} from "../component/Footer";
import {Outlet} from "react-router-dom";

function Home() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Home;