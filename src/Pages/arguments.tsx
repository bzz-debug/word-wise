import { Link } from "react-router-dom";

export function Arguments() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <h1>Arguments</h1>
      <p>
        Ahhhh arguing, we all do it. Some love it more than others. I'm not here
        to promote arguing, or to suggest that you go and get yourself involved
        in some. However, many of you will have experienced being in a fit of
        frustration when speaking to someone else, you KNOW you're in the right.
        But, you just can't think of the right thing to say that will get your
        point across.
      </p>
      <p>
        I know, I know, nobody "wins" an argument, and in the majority of cases,
        both people will end the conversation feeling like THEY won. Some people
        might criticise me for even attempting to provide advice on how to
        argue. But I don't care, some people suck at arguing and need a helping
        hand, especially when they are surrounded by boisterous loudmouths. Some
        people just need a bit of a leg up in life, and that includes those who
        can't think of the perfect takedown when they most need it. Trust me,
        I've been there. I've spent time studying the art of the argument, and
        now I am here to pass my knowledge on to you.{" "}
      </p>
      <p>
        Harvard Professor Dan Shapiro makes a great case in point for steering
        clear of arguing ........... You can see what he has to say on the
        matter here:
      </p>
      {/*insert video / link element???? Not sure how it works in react https://www.youtube.com/watch?v=IDj1OBG5Tpw&ab_channel=BigThink */}

      <p>
        However, if the petty spat you are in, is unavoidable, or it is waaaaaay
        too late to back out now, then that is what I am here for.{" "}
      </p>
    </>
  );
}
