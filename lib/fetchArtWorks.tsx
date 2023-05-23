

async function fetchArtWorks(){
  const resp = await fetch('https://api.artic.edu/api/v1/artworks?limit=5&fields=id,title,image_id,thumbnail')
  return await resp.json()
}

export default fetchArtWorks