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

export async function fetchProjImage() {
  try {
    const response = await fetch(`${BASE_URL}/media`)

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("Fetch Error:", error.message)
  }
}
