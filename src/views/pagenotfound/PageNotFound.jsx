import React from "react"

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-top pt-[50px] px-[10px] h-[calc(100vh-300px)] sm:h-[calc(100vh-120px)]">
      <h2 className="text-5xl">Hoppsan!</h2>
      <p className="text-center my-[30px]">
        Något verkar ha gått snett, vi kan inte hitta sidan du försöker komma
        åt.
      </p>
      <a
        href="/"
        className="uppercase bg-[var(--color-background)] border border-black rounded-full py-2 px-12"
      >
        <p>Ta mig till startsidan!</p>
      </a>
    </div>
  )
}

export default PageNotFound
