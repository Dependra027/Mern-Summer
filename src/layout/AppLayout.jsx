import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./AppLayout.css";

function AppLayout({children})
{
    return(
        <>
        <div className="Al">
        <Header />
        {children}
        <Footer />
        </div>
        
        </>
    )
}

export default AppLayout;