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
      <p>
        Harvard Professor Dan Shapiro makes a great case for steering clear of
        arguing. You can see what he has to say on the matter here:
      </p>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/IDj1OBG5Tpw`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <p>
        However, if the petty spat you are in, is unavoidable, or it is waaaaaay
        too late to back out now, then that is what I am here for.{" "}
      </p>
    </>
  );
}
