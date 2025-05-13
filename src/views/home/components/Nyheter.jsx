import React, { useState, useEffect } from "react";
import { getLatestNewsPosts } from "../../../services/api";

function extractParagraphText(html) {
  if (!html) return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const paragraphs = doc.querySelectorAll("p");
  return Array.from(paragraphs)
    .map((p) => p.textContent.trim())
    .filter(Boolean);
}

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
    <section className="p-4 md:p-16">
      <h2 className="text-4xl mb-12">Nyheter</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <article key={i} className="py-4 animate-pulse">
            <div className="h-6 w-3/4 bg-gray-200 mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-200 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 w-full"></div>
              <div className="h-4 bg-gray-200 w-5/6"></div>
              <div className="h-4 bg-gray-200 w-2/3"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="h-32 bg-gray-200"></div>
              <div className="h-32 bg-gray-200"></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <section className="p-4 md:p-16">
      <h2 className="text-4xl mb-12">Nyheter</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => {
          const firstParagraph = extractParagraphText(post.content?.rendered)[0] || '';
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
          const date = post.date ? new Date(post.date).toLocaleDateString('sv-SE') : '';

          return (
            <article key={post.id} className="py-4">
              {date && <p className="mb-2">{date}</p>}
              <h3 className="text-2xl mb-4">{post.title?.rendered}</h3>
              {firstParagraph && (
                <p className="mb-4 max-w-60ch">
                  {firstParagraph.substring(0, 150)}...
                </p>
              )}
              {featuredImage && (
                <div className="grid grid-cols-1 gap-2">
                  <img
                    src={featuredImage.source_url}
                    alt={featuredImage.alt_text || post.title?.rendered}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <a
                href={post.link}
                className="inline-block mt-4 text-sm underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Läs mer
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Nyheter;