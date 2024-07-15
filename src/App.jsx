import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from "./Second";
import Nav from "./NavFile";
import Third from "./Third";
import Counter from "./Counter";
import UseEfect from "./UseEfect";
import Hotel from "./Hotel";
import TopDestination from "./TopDestination";
import  Home from "./Home";
import NewHome from "./NewHome";
function App() {
    return (
        <>
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path ="/" element={<MyFirstComponent />}/>
            <Route path ="/second" element={<Second />}/>
            <Route path ="/third" element={<Third />}/>
            <Route path="/counter" element={<Counter />}/>
            <Route path ="/UseEfect" element={<UseEfect />}/>
            <Route path ="/Hotel" element={<Hotel />}/>
            <Route path = "/TopDestination" element={<TopDestination/>}></Route>
            <Route path ="/Home" element={<Home />}/>
            <Route path ="/newHome" element={<NewHome />}/>
            
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
