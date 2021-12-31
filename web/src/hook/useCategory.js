import { useEffect, useState } from 'react'
import getCategory from 'services/getCategory'

export const useCategory = ({ categoryName }) => {
  const [categoryInfo, setCategoryInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getCategory({ categoryName }).then((categoryInfo) =>
      setCategoryInfo(categoryInfo)
    )
    setIsLoading(false)
  }, [categoryName])

  return {
    categoryInfo,
    isLoading,
  }
}
