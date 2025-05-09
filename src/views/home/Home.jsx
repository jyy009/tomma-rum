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
    <div className="space-y-12"> 
      {/* Image + Text Row */}
      <div className="flex flex-col md:flex-row gap-8 items-center p-6 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <img 
            src={kartaImage} 
            alt="Karta över Sverige" 
            className="object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
  <h4 className="text-3xl md:text-6xl font-bold leading-tight">
    <div className="flex flex-col">
      <div className="self-start">Tomma Rum</div>
      <div className="self-center ml-8">är en</div>
      <div className="self-end mr-12">självorganiserad</div>
      <div className="self-start ml-4">plattform</div>
      <div className="self-end mr-16">för</div>
      <div className="flex justify-between">
        <span>kulturellt</span>
        <span>och</span>
      </div>
      <div className="self-end mr-20">konstnärligt</div>
      <div className="self-start ml-12">utbyte</div>
    </div>
  </h4>
          <p className="leading-relaxed">
          <span className="block">Varje sommar arrangerar alla deltagare tillsammans en</span>
  <span className="block">vistelse på en mindre ort i Sverige. Tomma rum handlar</span>
  <span className="block">om att mötas och att skapa nya former av samarbeten</span>
  <span className="block">mellan konstnärer, kulturutövare och lokalbefolkningen</span>
  <span className="block">på den ort vi besöker.</span>
          </p>
        </div>
      </div>
      <div className="text-2xl">
        <h1>Forsa 2025</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
  {/* Text Block 1 */}
  <div className="">
    <p className="">
    Forsa, här kommer vi! Beläget i de blå bergens och folkmusikens landskap Hälsingland, närmare bestämt i Hudiksvalls kommun, ligger Forsa socken och samhället Sörforsa. Här kommer vi mötas av industrihistoria av enorma mått. Fram till på 70-talet fanns här en livlig textilindustri, som sedan trappat ner men fortfarande finns kvar. 

De numera oanvända delarna av textilfabriken bildar vårt residens för sommaren. Kanske de största lokalerna hittills i Tomma Rums historia? Holma Helsinglands AB, som sedan 1898 drivit sitt linnspinneri och väveri vid bygdens sjö är våra värdar för sommaren.
    </p>
  </div>

  {/* Text Block 2 */}
  <div className="">
    <p className="">
    Vi har tillgång till en av de enormt rymliga byggnaderna. Där finns ett enklare kök och badrum. Vi kommer i år vara tio personer per vecka. Viktigt att veta är att vi kommer att sova i delar av det som tidigare har varit omklädningsrum och vissa kommer sova flera personer i samma rum. 

Det finns då avskiljande lättväggar, sådana som används på mässor. I Sörforsa finns matvarubutik, pizzeria och second-hand. I Hudiksvall finns större butiker. Varmt välkommen till en ny oförglömlig sommar med nya kreativa möten!
    </p>
  </div>

  {/* Image Block */}
  <div className="">
    <img 
      src="https://placehold.co/600x400" 
      alt="Forsa industrihistorisk bild" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

      {/* Nyheter Section - will automatically appear below */}
      <div className="max-w-7xl mx-auto px-6">
        <Nyheter newsItems={newsItems} />
      </div>
    </div>
  );
}

export default Home;