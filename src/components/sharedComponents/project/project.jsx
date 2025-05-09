import React from "react"
import Button from "../button/Button"

function Project({ title, date, content, id }) {
  const formatDate = (date) => {
    return date.slice(0, 10)
  }

  const extractFirstImage = (html) => {
    const match = html.match(/<img[^>]+src="([^">]+)"/)
    return match ? match[1] : null
  }
  function extractAllImages(html) {
    const matches = [...html.matchAll(/<img[^>]+src="([^">]+)"/g)]
    return matches.map((match) => match[1])
  }

  const imageUrl = extractAllImages(content.rendered)

  return (
    <section>
      <img
        src={imageUrl}
        alt={title.rendered}
        className="w-[407px] h-[282px] object-cover"
      />
      {/* <div
        className="w-[407px] h-[282px] object-cover"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      /> */}
      <h2>{title.rendered}</h2>
      <p>{formatDate(date)}</p>
      <Button projectId={id} />
    </section>
  )
}

export default Project
