import { useEffect, useState } from 'react'
import { getProgrammingRoadmap } from 'services/getProgrammingRoadmap'

export const useProgrammingRoadmap = () => {
  const [programmingRoadmap, setProgrammingRoadmap] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProgrammingRoadmap().then((roadmap) => {
      setProgrammingRoadmap(roadmap)
      setIsLoading(false)
    })
  }, [])

  return {
    programmingRoadmap,
    isLoading,
  }
}
