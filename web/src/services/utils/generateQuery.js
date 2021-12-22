import qs from 'qs'

/**
 * @description Generate query string from array
 * @param {string[]} queries
 */
export const generateQuery = (queries = []) => {
  const query = qs.stringify(
    {
      populate: queries,
    },
    {
      encodeValuesOnly: true,
    }
  )

  return query
}
