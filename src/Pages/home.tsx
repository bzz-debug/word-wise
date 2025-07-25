import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <>
      <h1>WordWise</h1>
      <span id="hook">CONVERS</span>
      <span id="hook2">ation inspir</span>
      <span id="hook">ATION</span>
      <br />
      <br />
      <br />
      {/*could style with the word ATION on the right, and both CONVERS and INSPIR on the left */}
      {/* <Link to={"/storytelling"}>Storytelling</Link> */}
      <Link to="/storytelling">Storytelling</Link>
      {"     "}
      <Link to="/arguments">Arguments</Link>
      {"     "}
      <Link to="/film-quotes">Film Quotes</Link>
    </>
  );
}

export default Home;
