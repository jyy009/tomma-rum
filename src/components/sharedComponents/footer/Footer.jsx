import React from "react"
import { MdOutlineHomeWork } from "react-icons/md"

function Footer() {
  return (
    <footer className="bg-stone-950 absolute bottom-0 w-screen text-center font-bold p-3 sm:flex sm:justify-between px-10">
      <div className="flex justify-center items-center">
        <MdOutlineHomeWork className="h-12 w-12" />
        <h3 className="text-3xl h-min">Tomma Rum</h3>
      </div>
      <ul>
        <li className="text-xl ">
          {" "}
          <a href="/about">Om oss</a>
        </li>
        <li className="text-xl">
          {" "}
          <a href="https://www.instagram.com/tomma_rum?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
        </li>
        <li className="text-xl">
          {" "}
          <a href="https://www.facebook.com/tommarum.sweden">Facebook</a>
        </li>
        <li className="text-xl">
          {" "}
          <a href="mailto:mail@tommarum.se">Mail</a>
        </li>
        <li className="text-xl">
          {" "}
          <a href="">2025</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
