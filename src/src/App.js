import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Tickets from "./components/Tickets";
import Program from "./components/Program";
import Register from "./components/Register";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route element={<Home/>} path="/" exact />
      <Route element={<About/>} path="/about" />
      <Route element={<Program/>} path="/program" />
      <Route element={<Tickets/>} path="/tickets" />
      <Route element={<Register/>} path="/register"/>
      <Route element={<Contact/>} path="/contact" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
