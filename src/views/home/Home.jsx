import React from "react";
import "./Home.css"

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Tomma Rum är en självorganiserad plattform för kulturellt och konstnärligt utbyte
      </h1>
      <p className="home-description">
        Varje sommar arrangerar alla deltagare tillsammans en vistelse på en mindre ort i Sverige. 
        Tomma rum handlar om att mötas och att skapa nya former av samarbeten mellan konstnärer, 
        kulturutövare och lokalbefolkningen på den ort vi besöker.
      </p>
    </div>
  );
}

export default Home;