import { generateQuery } from './utils/generateQuery'

export const getCategories = async () => {
  const query = generateQuery({
    fieldName: 'populate',
    queries: ['subcategories', 'subcategories.icon'],
  })

  const categories = await fetch(
    `http://localhost:1337/api/categories?${query}`
  )
    .then((res) => res.json())
    .then(({ data }) =>
      data.map((category) => ({
        id: category.id,
        ...category.attributes,
        subcategories: getSubCategories(category),
      }))
    )

  return categories
}

const getSubCategories = (category) => {
  return category.attributes.subcategories.data.map((subcategory) => ({
    id: subcategory.id,
    ...subcategory.attributes,
  }))
}
