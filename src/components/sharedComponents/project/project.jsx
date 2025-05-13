import React from "react"
import Button from "../button/Button"

function Project({ title, date, content, id }) {
  const formatDate = (date) => {
    return date.slice(0, 10)
  }

  function extractFirstMedia(html) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, "text/html")

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

  function truncateString(title, num) {
    if (title.length <= 1) {
      return title
    }
    return title.split(" ").slice(0, num).join(" ") + "..."
  }

  const imageUrl = extractFirstMedia(content.rendered)

  return (
    <section>
      <div className="flex flex-col gap-7 2xl:gap-8">
        {imageUrl && imageUrl.type === "image" && (
          <img
            src={imageUrl.src}
            alt={title.rendered}
            className="w-[407px] h-[282px] 2xl:w-[443px] 2xl:h-[308px] object-cover"
          />
        )}
        {imageUrl && imageUrl.type === "iframe" && (
          <div className="w-full min-w-[407px] aspect-[407/282] mx-auto 2xl:min-w-[443px] 2xl:aspect-[443/308] ">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: imageUrl.element }}
            />
          </div>
        )}
        {imageUrl && imageUrl.type === "embed" && (
          <div
            className="w-[407px] h-[282px] 2xl:w-[443px] 2xl:h-[308px]"
            dangerouslySetInnerHTML={{ __html: imageUrl.element }}
          />
        )}
        {!imageUrl && (
          <p className="w-[407px] h-[282px] 2xl:w-[443px] 2xl:h-[308px]">
            {" "}
            no image
          </p>
        )}

        <div className="flex flex-col items-center gap-6 2xl:mb-0 2xl:gap-7">
          <h2 className="text-4xl font-bold">
            {truncateString(title.rendered, 2)}
          </h2>
          <p className="text-base font-normal">{formatDate(date)}</p>
          <Button className="w-[160px] h-[39px] text-base" projectId={id} />
        </div>
      </div>
    </section>
  )
}

export default Project
