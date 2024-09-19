import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {


  return (
    <>
      <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price" element={<Price />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
    </>
  )
}

export default App
