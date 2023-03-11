import { Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/main/home";
import Services from "./pages/services/services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
