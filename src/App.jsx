import "./style/App.css";
import SignUpp from "./components/SignUpp";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUpp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Home />
      <About />
    </BrowserRouter>
  );
}

export default App;
