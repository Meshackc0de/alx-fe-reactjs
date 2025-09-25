import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";

export default function App() {
    return ( 
        <>

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        
        </BrowserRouter>
        </>
     );
}
