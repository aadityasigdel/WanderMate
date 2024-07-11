import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from "./Second";
import Nav from "./NavFile";
import Third from "./Third";
import Counter from "./Counter";

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
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
