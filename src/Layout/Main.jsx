import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";

const Main = () => {
    const location=useLocation();
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <> 
       {  noHeaderFooter ||  <Navbar></Navbar>}
           <Outlet></Outlet> 
       {    noHeaderFooter ||   <Footer></Footer>}
        </>
    );
};

export default Main;