import React from "react"

function BlogPost({ date, title, paragraphs, imageUrls }) {
  const formatDate = (date) => date?.slice(0, 10)

  return (
    <article className="py-4">
      <p>{formatDate(date)}</p>
      <h3 className="text-4xl">{title}</h3>
      <div>
        {paragraphs.map((text, idx) => (
          <p key={idx} className="max-w-60ch py-4">
            {text}
          </p>
        ))}
      </div>
      {imageUrls.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
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
