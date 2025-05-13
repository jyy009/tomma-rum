import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getArtProjectsByYear } from "../../services/api"
import BlogPost from "./BlogPost"

function extractParagraphText(html) {
  if (!html) return []
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")
  const paragraphs = doc.querySelectorAll("p")
  return Array.from(paragraphs)
    .map((p) => p.textContent.trim())
    .filter(Boolean)
}

const extractAllImages = (html) => {
  if (!html) return []
  const imgRegex = /<img[^>]+src="([^">]+)"/g
  const matches = [...html.matchAll(imgRegex)]
  return matches.map((match) => match[1])
}

function SingleProject() {
  const { year } = useParams()
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getArtProjectsByYear(year)
      .then(({ data }) => {
        setPosts(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("API Error:", error)
        setIsLoading(false)
      })
  }, [year])

  if (isLoading) return <div>Loading...</div>
  if (!posts || posts.length === 0) return <div>No posts found for {year}.</div>

  return (
    <section className="p-4 md:p-16">
      <h2 className="text-7xl mb-6">{year}</h2>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          date={post.date}
          title={post.title?.rendered}
          paragraphs={extractParagraphText(post.content?.rendered)}
          imageUrls={extractAllImages(post.content?.rendered)}
        />
      ))}
    </section>
  )
}

export default SingleProject
