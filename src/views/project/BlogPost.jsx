import React from "react"

function BlogPost({ date, title, paragraphs, imageUrls }) {
  const formatDate = (date) => date?.slice(0, 10)

  function linkify(text) {
    const urlRegex = /((https?:\/\/[^\s]+)|(www\.[^\s]+))/g
    let lastIndex = 0
    const elements = []

    text.replace(urlRegex, (url, _all, _httpUrl, _wwwUrl, offset) => {
      if (lastIndex < offset) {
        elements.push(text.slice(lastIndex, offset))
      }
      const href = url.startsWith("www.") ? `https://${url}` : url
      elements.push(
        <a
          key={offset}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {url}
        </a>
      )
      lastIndex = offset + url.length
      return url
    })

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex))
    }

    return elements.length > 0 ? elements : text
  }

  return (
    <article className="py-4">
      <p>{formatDate(date)}</p>
      <h3 className="text-4xl">{title}</h3>
      <div>
        {paragraphs.map((text, idx) => (
          <p key={idx} className="max-w-60ch py-2">{linkify(text)}</p>
        ))}
      </div>
      {imageUrls.length > 0 && (
        <div className="mt-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {imageUrls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={title || `Project image ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>
      )}
    </article>
  )
}

export default BlogPost
