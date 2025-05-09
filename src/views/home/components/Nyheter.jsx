import React from "react";

function Nyheter({ newsItems }) {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-12">Nyheter</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="overflow-hidden flex flex-col items-center text-center">
            <img 
              src="https://placehold.co/600x400" 
              alt={item.city} 
              className="w-full object-cover"
            />
            <div className="p-6">
              <div className="flex flex-col mb-2">
                <h3 className="text-xl font-semibold">{item.city}</h3>
                <span className="text-gray-500">{item.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{item.text}</p>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors rounded-full">
                Läs mer
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Nyheter;