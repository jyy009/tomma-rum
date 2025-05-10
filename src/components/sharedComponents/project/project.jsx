import React from "react"
import Button from "../button/Button"

function Project({ title, date, content, id }) {
  const formatDate = (date) => {
    return date.slice(0, 10)
  }

  // const extractFirstImage = (html) => {
  //   const match = html.match(/<img[^>]+src="([^">]+)"/)
  //   return match ? match[1] : null
  // }

  function extractFirstMedia(html) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    const img = doc.querySelector("img")
    if (img) {
      return { type: "image", src: img.src, element: img.outerHTML }
    }

    const iframe = doc.querySelector("iframe")
    if (iframe) {
      return { type: "iframe", src: iframe.src, element: iframe.outerHTML }
    }

    const embed = doc.querySelector("embed")
    if (embed) {
      return { type: "embed", src: embed.src, element: embed.outerHTML }
    }

    return null
  }

  const imageUrl = extractFirstMedia(content.rendered)

  return (
    // <section>
    //   <img
    //     src={imageUrl}
    //     alt={title.rendered}
    //     className="w-[407px] h-[282px] object-cover"
    //   />
    //   {/* <div
    //     className="w-[407px] h-[282px] object-cover"
    //     dangerouslySetInnerHTML={{ __html: content.rendered }}
    //   /> */}
    //   <h2>{title.rendered}</h2>
    //   <p>{formatDate(date)}</p>
    //   <Button projectId={id} />
    // </section>

    <section>
      {imageUrl && imageUrl.type === "image" && (
        <img
          src={imageUrl.src}
          alt={title.rendered}
          className="w-[407px] h-[282px] object-cover"
        />
      )}

      {imageUrl && imageUrl.type === "iframe" && (
        <div
          className="w-[407px] h-[282px] object-cover"
          dangerouslySetInnerHTML={{ __html: imageUrl.element }}
          
        />
      )}

      {imageUrl && imageUrl.type === "embed" && (
        <div
          className="w-[407px] h-[282px] object-cover"
          dangerouslySetInnerHTML={{ __html: imageUrl.element }}
        />
      )}

      <h2>{title.rendered}</h2>
      <p>{formatDate(date)}</p>
      <Button projectId={id} />
    </section>
  )
}

export default Project
