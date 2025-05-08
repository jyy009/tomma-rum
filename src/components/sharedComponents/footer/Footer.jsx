import React from "react"
import { MdOutlineHomeWork } from "react-icons/md"

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-50 absolute bottom-0 w-screen text-center font-bold p-3 sm:flex sm:justify-between px-10 md:pr-20">
      <div className="flex justify-center items-center ">
        <img src="src/assets/tommarum-logo_TR-WHITE.png" alt="the tomma rum logo" className=" w-100 mb-5 sm:mb-0"/>
      </div>
      <ul>
        <li className="text-xl">
          {" "}
          <a href="/about">Om oss</a>
        </li>
        <li className="text-xl">
          {" "}
          <a href="https://www.instagram.com/tomma_rum?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">Instagram</a>
        </li>
        <li className="text-xl">
          {" "}
          <a href="https://www.facebook.com/tommarum.sweden" target="_blank">Facebook</a>
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
