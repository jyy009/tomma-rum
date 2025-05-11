import React, { useState, useEffect } from "react";
import { getArtProjectsByYear } from "../../services/api";
import BlogPost from "./BlogPost";

function extractParagraphText(html) {
  if (!html) return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const paragraphs = doc.querySelectorAll("p");
  return Array.from(paragraphs)
    .map((p) => p.textContent.trim())
    .filter(Boolean);
}

function extractAllImages(html) {
  if (!html) return [];
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const matches = [...html.matchAll(imgRegex)];
  return matches.map((match) => match[1]);
}

function SingleProject({ initialYear = 2024 }) {
  const [posts, setPosts] = useState([]);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getArtProjectsByYear(selectedYear)
      .then((results) => {
        setPosts(results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("API Error: " + error.message);
        setIsLoading(false);
      });
  }, [selectedYear]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!posts.length) return <div>No projects found.</div>;

  return (
    <section className="p-16">
      <h2>Season {selectedYear} ({posts.length} posts)</h2>
      <select value={selectedYear} onChange={e => setSelectedYear(Number(e.target.value))}>
        {Array.from({ length: 2025 - 2003 }, (_, i) => 2003 + i).map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          date={post.date}
          title={post.title?.rendered}
          paragraphs={extractParagraphText(post.content?.rendered)}
          imageUrls={extractAllImages(post.content?.rendered)}
        />
      ))}
    </section>
  );
}

export default SingleProject;
