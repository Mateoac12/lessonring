import { useEffect, useState } from 'react'
import { getCategories } from 'services/getCategories'

export const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getCategories().then((categories) => {
      setCategories(categories)
      setIsLoading(false)
    })
  }, [])

  return {
    categories,
    isLoading,
  }
}
