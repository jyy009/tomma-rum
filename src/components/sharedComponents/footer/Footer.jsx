import React from "react"
import footerLogo from "../../../assets/tommarum-logo_TR-WHITE.png"

function Footer() {
  return (
    <footer className="bg-stone-950 text-[var(--color-background)] bottom-0 w-screen text-center font-bold p-3 sm:flex sm:justify-between px-10 md:pr-20">
      <div className="flex justify-center items-center ">
        <img
          src={footerLogo}
          alt="tomma rum logo"
          className=" w-[24rem] mb-5 sm:mb-0"
        />
      </div>
      <ul>
        <li className="text-xl">
          {" "}
          <a href="/about">Om oss</a>
        </li>
        <li className="text-xl">
          {" "}
          <a
            href="https://www.instagram.com/tomma_rum?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li className="text-xl">
          {" "}
          <a
            href="https://www.facebook.com/tommarum.sweden"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li className="text-xl">
          {" "}
          <a href="mailto:mail@tommarum.se">Mail</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
