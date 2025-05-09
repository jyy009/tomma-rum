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

  const imageUrl = extractFirstImage(content.rendered)

  return (
    <section>
      <img src={imageUrl} alt={title.rendered} className="w-[407px] h-[282px] object-cover"/>
      <h2>{title.rendered}</h2>
      <p>{formatDate(date)}</p>
      <Button projectId={id}/>
    </section>
  )
}

export default Project
