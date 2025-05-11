const BASE_URL = "https://tommarum.se/wp-json/wp/v2"

export async function getArtProjects({ page, pageSize}) {
  try {
    const res = await fetch(
      `${BASE_URL}/posts?page=${page}&per_page=${pageSize}`
    )

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    const data = await res.json()
    const totalPages = Number(res.headers.get("X-WP-TotalPages"))

    return {data, totalPages}

  } catch (error) {
    console.error("Fetch Error:", error.message || error)
    throw error
  }
}

