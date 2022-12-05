import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Verify from "./components/Verify/Verify";
import Home from "./components/Home/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
