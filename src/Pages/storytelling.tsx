import { Link } from "react-router-dom";
import { wordRequest } from "../../api.ts";
import { Popup } from "../Components/Popup.tsx";
import { useState } from "react";

export function Storytelling() {
  const [triggerPulled, setTriggerPulled] = useState(false);
  const [definition, setDefinition] = useState("");

  function handleClickableWord(word: string) {
    setTriggerPulled(true);
    wordRequest(word).then((result) => {
      console.log(result.data[0].shortdef[0]);
      setDefinition(result.data[0].shortdef[0]);

      console.log();
    });
  }
  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <main>
        <section id="intro">
          <h1>Storytelling</h1>
          <p>
            We've all been there, chatting with friends, neighbors, or people
            you're trying to impress at a party. You're telling a story about
            that\ntime your friend embarrassed themselves doing god knows what.
            You reach the pinnacle of the anecdote and poof! You just can't find
            the right words to properly convey the moment, or the feelings you
            were going through.
          </p>
          <p>
            We've got you, here you will find a bunch of resources for improving
            your lexical choices when it comes to telling those fascinating
            stories you have in your locker.{" "}
          </p>
        </section>
        <section>
          <p>
            When telling a story, you need to know your audience. Are you
            surrounded by{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              aristocrats
            </a>{" "}
            Or are you deep within the{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              firmaments
            </a>
            of{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              rapscallions
            </a>
          </p>
          <br />
          <br />
          <br />
          <h2>
            How to Tell a Good Story: A Guide for the Modern{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              Raconteur
            </a>
          </h2>
          <br />
          <p>
            Storytelling is not a{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              frivolity
            </a>{" "}
            but a{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              sacrosanct
            </a>{" "}
            tradition of human expression. It connects the{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              quotidian
            </a>{" "}
            to the sublime and codifies meaning across generations. Even in our
            hypermodern world, we hunger for tales that evoke something{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              numinous
            </a>
            . But telling a truly good story is no mere parlour trick; it is a
            cultivated faculty. This guide will reveal the key principles for
            masterful storytelling: audience intuition, tension, humour, and
            narrative cadence—with a touch of the{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              arcane
            </a>
            .
          </p>
          <h3>1. Know Your Audience: Speak to the Soul, Not the Room</h3>
          <p>
            A story is only as strong as its resonance with the listener’s inner{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              paradigm
            </a>
            . To ignore your audience’s disposition is to attempt{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              cartography
            </a>{" "}
            blindfolded. Are they jaded, whimsical, sentimental, or combative in
            temperament? This inquiry is not superficial—it is a necessary
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              {" "}
              hermeneutic
            </a>{" "}
            exercise. The successful storyteller becomes a kind of empathic
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              {" "}
              augur
            </a>
            {/* could maybe do a comparison with the AI written text - how to make it not sound like that? */}
            {/* turn it into a blog ? Get Ethan to write some articles for it about language, creating storytelling etc */}
            .
          </p>
          <h3>2. Start with a Bang, but Plant a Seed</h3>
          <p>
            Too many tales die in a{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              deluge
            </a>{" "}
            of{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              exposition
            </a>{" "}
            and procedural lethargy. Begin instead with crisis, mystery, or a
            moment of uncanny import. The listener should feel immediately
            submerged in narrative{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              exigency
            </a>
            . Do not explain—bewilder, and let curiosity become the{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              lodestar
            </a>
            . And beneath this disarray, hide a{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              germinal
            </a>{" "}
            symbol to revisit later.
          </p>
          <h3>3. Build Tension Like a Cathedral</h3>
          <p>
            Tension is not mere conflict—it is latent consequence humming like a
            taut{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              lyre
            </a>
            . It is the sensation that any sentence might pivot into calamity or
            revelation. Let each moment suggest the proximity of collapse or
            triumph. You are not just telling events—you are orchestrating
            suspense as a{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                console.log(event.target.textContent);
                handleClickableWord(event.target.textContent);
              }}
            >
              dramaturge
            </a>
            . In the cathedral of narrative, tension is the buttress holding it
            aloft.
          </p>
          {triggerPulled ? (
            <Popup
              trigger={true}
              triggerPulled={triggerPulled}
              setTriggerPulled={setTriggerPulled}
              definition={definition}
            ></Popup>
          ) : (
            ""
          )}
        </section>



      </main>
    </>
  );
}
