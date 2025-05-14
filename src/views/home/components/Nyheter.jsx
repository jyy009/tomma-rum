import React, { useState, useEffect } from "react"
import { getLatestNewsPosts } from "../../../services/api"
import { Link } from "react-router-dom"
import Button from "../../../components/sharedComponents/button/Button"

function extractParagraphText(html) {
  if (!html) return []
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")
  const paragraphs = doc.querySelectorAll("p")
  return Array.from(paragraphs)
    .map((p) => p.textContent.trim())
    .filter(Boolean)
}

function extractFirstImage(html) {
  if (!html) return null
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")
  const img = doc.querySelector("img")
  return img?.getAttribute("src") || null
}

function Nyheter() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getLatestNewsPosts(3)
      .then((posts) => {
        setPosts(posts)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  if (isLoading)
    return (
      <section className="">
        <h1 className="text-4xl md:text-5xl font-bold">Nyheter</h1>
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
    )

  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => {
          const firstParagraph =
            extractParagraphText(post.content?.rendered)[0] || ""
          const firstImage = extractFirstImage(post.content?.rendered)
          const date = post.date
            ? new Date(post.date).toLocaleDateString("sv-SE")
            : ""

          return (
            <article
              key={post.id}
              className="py-4 flex flex-col items-center text-center h-full"
            >
              {firstImage && (
                <div className="w-full max-w-[400px] mb-4">
                  <img
                    src={firstImage}
                    alt={post.title?.rendered}
                    className="w-full h-60 object-cover"
                  />
                </div>
              )}

              <h3 className="text-2xl font-medium text-black mb-2 truncate w-full whitespace-nowrap overflow-hidden">
                {post.title?.rendered}
              </h3>

              {date && (
                <p className="text-black text-base font-medium mb-2">{date}</p>
              )}

              {firstParagraph && (
                <p className="text-black text-base font-medium mb-4 max-w-60ch h-[100px]">
                  {firstParagraph.substring(0, 150)}...
                </p>
              )}

              <Button projectId={post.id} className="text-sm mt-2" />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Nyheter
