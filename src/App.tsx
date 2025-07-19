import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/storytelling" element={<Storytelling />}></Route> */}
    </Routes>
  );
}

export default App;
