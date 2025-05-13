import React from "react"
import { useEffect, useState } from "react"
import Button from "../button/Button"
import { getArtProjectsByYear } from "../../../services/api"

function getFirstImageFromPosts(posts) {
  for (const post of posts) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, "text/html");
    const img = doc.querySelector("img");
    if (img) {
      return img.src;
    }
  }
  return null;
}

function Project({ title, date, id }) {

  const formatDate = (date) => date?.slice(0, 10) || "";
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchImage() {
      setLoadingImage(true);
      try {
        const { data } = await getArtProjectsByYear(date, 1, 10); // date is your year string
        if (isMounted) {
          setImageUrl(getFirstImageFromPosts(data));
        }
      } catch {
        if (isMounted) setImageUrl(null);
      } finally {
        if (isMounted) setLoadingImage(false);
      }
    }
    fetchImage();
    return () => { isMounted = false; };
  }, [date]);

  return (
    <section>
      <div className="flex flex-col gap-7 2xl:gap-8">
        {loadingImage ? (
          <div className="w-[407px] h-[282px] 2xl:w-[443px] 2xl:h-[308px] flex items-center justify-center bg-gray-100">
            <span>Loading...</span>
          </div>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={title.rendered}
            className="w-[407px] h-[282px] 2xl:w-[443px] 2xl:h-[308px] object-cover"
          />
        ) : (
          <p className="w-[407px] h-[282px] 2xl:w-[443px] 2xl:h-[308px] flex items-center justify-center bg-gray-100">
            no image
          </p>
        )}

        <div className="flex flex-col items-center 2xl:mb-0 2xl:gap-7">
          <h2 className="text-4xl font-bold">
            {title.rendered}
          </h2>
          <p className="text-xl font-normal mb-4">{formatDate(date)}</p>
          <Button className="w-[160px] h-[39px] text-base" projectId={id} />
        </div>
      </div>
    </section>
  )
}

export default Project
