import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import { Arguments } from "./Pages/arguments";
import { Storytelling } from "./Pages/storytelling";
import { FilmQuotes } from "./Pages/film-quotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/arguments" element={<Arguments />} />
      <Route path="/storytelling" element={<Storytelling />} />
      <Route path="/film-quotes" element={<FilmQuotes/>}/>
      {/* <Route path="/storytelling" element={<Storytelling />}></Route> */}
    </Routes>
  );
}

export default App;
