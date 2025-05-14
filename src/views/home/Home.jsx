import React from "react"
import Nyheter from "./components/Nyheter"
import kartaImage from "../../assets/karta.png"

function Home() {
  return (
    <div className="space-y-12 mb-10">
      {/* Image + Text Row */}
      <div className="flex flex-col mx-6 my-6 mb-10 md:flex-row md:mx-12 md:my-10 md:mb-14 gap-10 md:items-start lg:mx-20 lg:gap-16">
        {/* Left Side - Background Image with Overlay Text */}
        <div className="relative flex items-start justify-center w-full md:w-1/2 h-96 md:h-auto">
          <img
            src={kartaImage}
            alt="Karta över Sverige"
            className="w-full h-full md:w-[401px] md:h-[885px] object-contain"
          />
          <div className="absolute inset-0 flex items-start justify-center ">
            <div className="w-full space-y-6">
              <h4 className="text-3xl md:max-lg:text-[49px] lg:text-6xl font-bold leading-tight">
                <div className="flex flex-col mt-6">
                  <div className="self-start">Tomma Rum</div>
                  <div className="self-center ml-8">är en</div>
                  <div className="self-end">självorganiserad</div>
                  <div className="self-start ml-4">plattform</div>
                  <div className="self-end mr-16">för</div>
                  <div className="flex justify-between">
                    <span>kulturellt och</span>
                  </div>
                  <div className="self-end mr-10">konstnärligt</div>
                  <div className="self-start ml-12">utbyte</div>
                </div>
              </h4>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col justify-start space-y-8 w-full md:w-1/2 text-black">
          <div className="space-y-4">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold">Forsa 2025</h2>

            <p className="leading-relaxed max-w-60ch">
              <span className="block">
                Forsa, här kommer vi! Beläget i de blå bergens och folkmusikens
                landskap Hälsingland, närmare bestämt i Hudiksvalls kommun,
                ligger Forsa socken och samhället Sörforsa. Här kommer vi mötas
                av industrihistoria av enorma mått. Fram till på 70-talet fanns
                här en livlig textilindustri, som sedan trappat ner men
                fortfarande finns kvar.
              </span>
              <span className="block mt-4">
                De numera oanvända delarna av textilfabriken bildar vårt
                residens för sommaren. Kanske de största lokalerna hittills i
                Tomma Rums historia? Holma Helsinglands AB, som sedan 1898
                drivit sitt linnspinneri och väveri vid bygdens sjö är våra
                värdar för sommaren.
              </span>
            </p>
          </div>

          <div>
            <p className="leading-relaxed max-w-60ch">
              <span className="block">
                Vi har tillgång till en av de enormt rymliga byggnaderna. Där
                finns ett enklare kök och badrum. Vi kommer i år vara tio
                personer per vecka. Viktigt att veta är att vi kommer att sova i
                delar av det som tidigare har varit omklädningsrum och vissa
                kommer sova flera personer i samma rum.
              </span>
              <span className="block mt-4">
                Det finns då avskiljande lättväggar, sådana som används på
                mässor. I Sörforsa finns matvarubutik, pizzeria och second-hand.
                I Hudiksvall finns större butiker. Varmt välkommen till en ny
                oförglömlig sommar med nya kreativa möten!
              </span>
            </p>
          </div>
          <div>
            <img
              src="https://tommarum.se/wp-content/uploads/2025/04/forsa.png"
              alt="Forsa industrihistorisk bild"
              className="w-[70%] object-cover"
            />
          </div>
        </div>
      </div>

      <hr className="border-none h-[2px] bg-[var(--color-accent)]"/>

      <div className="max-w-7xl mx-auto px-6">
        <Nyheter />
      </div>
    </div>
  )
}

export default Home
