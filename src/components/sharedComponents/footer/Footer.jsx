import React from "react"
import { MdOutlineHomeWork } from "react-icons/md"

function Footer() {
  return (
    <footer className="bg-stone-900 absolute bottom-0 w-screen">
      <div className="flex content-center">
        <MdOutlineHomeWork className="" />
        <h3 className="text-3xl">Tomma Rum</h3>
      </div>
      <ul>
        <li>Om oss</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Mail</li>
        <li>2025</li>
      </ul>
    </footer>
  )
}

export default Footer
