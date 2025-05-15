import React from "react"
import Button from "../button/Button"

function Project({ title, date, imageUrl, year, logo }) {
  const formatDate = (date) => date?.slice(0, 10) || ""

  const yearsWithLogo = ["2010", "2003"]
  const [imgError, setImgError] = React.useState(false)
  const shouldShowLogo = yearsWithLogo.includes(year) || imgError

  return (
    <section>
      <div className="flex flex-col gap-4 2xl:gap-8 h-full items-center">
        {imageUrl && !shouldShowLogo ? (
          <img
            src={imageUrl}
            alt={title.rendered}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full aspect-[4/3] flex items-center justify-center bg-[var(--color-accent)]">
            <img
              src={logo}
              alt="Tommarum Logo"
              className="max-h-full max-w-full object-contain"
              style={{ maxHeight: "70%", maxWidth: "70%" }}
            />
          </div>
        )}

        <div className="flex flex-col items-center 2xl:mb-0 2xl:gap-4">
          <h2 className="text-4xl font-bold">{title.rendered}</h2>
          <p className="text-xl font-normal mb-4">{formatDate(date)}</p>
          <Button className="w-[160px] h-[39px] text-base" year={year} />
        </div>
      </div>
    </section>
  )
}

export default Project
