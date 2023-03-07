import { Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/main/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
