import React from "react"
import { Link } from "react-router-dom"

function Button({ projectId }) {
  return (
    <Link
      to={`/projects/${projectId}`}
      className="uppercase bg-[var(--color-background)] border border-black rounded-full text-xl py-2 px-12"
    >
      Läs mer
    </Link>
  )
}

export default Button
