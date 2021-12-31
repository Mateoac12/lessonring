import qs from 'qs'

/**
 * @description Generate query string from array
 * @param {string[]} queries
 */
export const generateQuery = ({ fieldName, queries = [] } = {}) => {
  const query = qs.stringify(
    {
      [fieldName]: queries,
    },
    {
      encodeValuesOnly: true,
    }
  )

  return query
}
