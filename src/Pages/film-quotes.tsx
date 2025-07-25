import { Link } from "react-router-dom";

export function FilmQuotes() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <h1>Film Quotes to use in conversation</h1>
      <p>
        Okay this one is a bit of a joke, I sometimes see how many Spiderman 3
        quotes I can fit into a casual chat. It's even funnier if its a serious
        conversation. Generally, the more serious the moment and the less
        serious the film, the better.
      </p>
      <img src="../src/assets/Screenshot from 2025-07-19 17-48-52.png" />

      {/*gamify this? - turn it into an app with a daily challenge of how many you can fit into conversation in one day................*/}

      {/*add a dating aspect to it, pick up lines from films / dating app for nerds.*/}

      {/*new app idea - pub quiz assistant */}
    </>
  );
}
