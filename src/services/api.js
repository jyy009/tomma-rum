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

export function getArtProjectsByYear(year) {
  return fetch(`https://tommarum.se/wp-json/wp/v2/posts?after=${year}-01-01T00:00:00&before=${year}-12-31T23:59:59`)
    .then(res => res.json());
}