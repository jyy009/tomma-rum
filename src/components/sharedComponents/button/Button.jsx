import React from "react"
import { Link } from "react-router-dom"

function Button({ projectId, className }) {
  return (
    <Link
      to={`/projects/${projectId}`}
      className={`uppercase bg-[var(--color-background)] border border-black rounded-full py-2 px-12 ${className}`}
    >
      Läs mer
    </Link>
  )
}

export default Button
