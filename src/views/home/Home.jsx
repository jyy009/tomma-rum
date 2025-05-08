import React from "react";
import "./Home.css";
import Nyheter from "./components/Nyheter";

function Home() {
  const newsItems = [
    {
      id: 1,
      city: "Stockholm",
      date: "2023-05-15",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      city: "Göteborg",
      date: "2023-06-22",
      text: "Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 3,
      city: "Malmö",
      date: "2023-07-30",
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
  ];

  return (
    <div> {/* Single root element */}
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
      
      <Nyheter newsItems={newsItems} /> {/* Use the imported component */}
    </div>
  );
}

export default Home;