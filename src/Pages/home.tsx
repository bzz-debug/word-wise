import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>WordWise</h1>
      <h2>CONVERSation inspirATION</h2>
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
