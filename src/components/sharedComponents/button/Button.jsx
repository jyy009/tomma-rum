import React from "react"
import { Link } from "react-router-dom"

function Button({ year, className }) {
  return (
    <Link
      to={`/projects/${year}`}
      className={`uppercase bg-[var(--color-background)] border border-black rounded-full py-2 px-12 ${className}`}
    >
      Läs mer
    </Link>
  )
}

export default Button
