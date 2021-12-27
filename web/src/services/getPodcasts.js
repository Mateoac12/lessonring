import { generateQuery } from './utils/generateQuery'

export const getPodcasts = async () => {
  const query = generateQuery(['subcategory', 'image'])
  return await fetch(`http://localhost:1337/api/podcasts?${query}`)
    .then((res) => res.json())
    .then(({ data }) => data)
}
