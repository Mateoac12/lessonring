import { generateQuery } from './utils/generateQuery'

const getCategory = async ({ categoryName }) => {
  const query = generateQuery({
    fieldName: 'fields',
    queries: ['description', 'name'],
  })

  return await fetch(
    `http://localhost:1337/api/categories?${query}&filters[name][$eq]=${categoryName}`
  )
    .then((res) => res.json())
    .then(({ data }) => ({
      name: data[0].attributes.name,
      description: data[0].attributes.description,
    }))
}

export default getCategory
