import React, { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
import { getArtProjectById } from "../../services/api"

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
  // const { id } = useParams() || { id: 6351 }
  const id = 6330

  const [project, setProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArtProjectById(id)
      .then((data) => {
        setProject(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("API Error:", error)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) return <div>Loading...</div>
  if (!project) return <div>Project not found.</div>

  return (
    <section className="p-16">
      <article className="py-4">
        <p>{project.date?.slice(0, 10)}</p>
        <h3 className="text-4xl">{project.title?.rendered}</h3>
        <div>
          {extractParagraphText(project.content?.rendered).map((text, idx) => (
            <p key={idx} className="max-w-60ch py-4">
              {text}
            </p>
          ))}
        </div>
        {extractAllImages(project.content?.rendered).length > 0 && (
          <div className="grid grid-cols-4 gap-4">
            {extractAllImages(project.content?.rendered).map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={project.title?.rendered || `Project image ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        )}
      </article>
    </section>
  )
}

export default SingleProject
