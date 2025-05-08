import React from "react"

function Project({ title, date }) {
  const formatDate = (date) => {
    return date.slice(0, 10)
  }

  return (
    <section>
      <h2>{title.rendered}</h2>
      <p>{formatDate(date)}</p>
    </section>
  )
}

export default Project
