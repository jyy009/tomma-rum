import React, { useState, useEffect } from "react";
import { getLatestNewsPosts } from "../../../services/api";

function Nyheter() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLatestNewsPosts(3)
      .then(posts => {
        setPosts(posts);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-black">Nyheter</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse flex flex-col items-center">
            <div className="bg-gray-200 h-48 w-full max-w-md"></div>
            <div className="p-6 space-y-4 w-full max-w-md text-center">
              <div className="h-6 bg-gray-200 rounded mx-auto w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded mx-auto w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded mx-auto w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-black">Nyheter</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => {
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
          const excerpt = post.excerpt?.rendered 
            ? post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 150) + '...'
            : '';

          return (
            <div
              key={post.id}
              className="flex flex-col items-center text-black"
            >
              {/* Image Container */}
              <div className="w-full max-w-md overflow-hidden">
                {featuredImage && (
                  <img
                    src={featuredImage.source_url}
                    alt={featuredImage.alt_text || post.title.rendered}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              
              {/* Text Container */}
              <div className="p-6 w-full max-w-md text-center space-y-4">
                {/* Title */}
                <h3 
                  className="text-xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                
                {/* Date */}
                <p className="text-sm">
                  {new Date(post.date).toLocaleDateString('sv-SE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                
                {/* Excerpt */}
                <p className="text-base">{excerpt}</p>
                
                {/* Read More Button */}
                <a 
                  href={post.link} 
                  className="inline-block px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors mt-4"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Läs mer
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Nyheter;