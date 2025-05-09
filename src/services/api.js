const BASE_URL = "https://tommarum.se/wp-json/wp/v2"

export async function getArtProjects() {
  try {
    const res = await fetch(`${BASE_URL}/posts`)

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    return await res.json()
  } catch (error) {
    console.error("Fetch Error:", error.message || error)
    throw error
  }
}


