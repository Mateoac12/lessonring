import { useEffect, useState } from 'react'
import { getPodcasts } from 'services/getPodcasts'

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getPodcasts().then((podcasts) => {
      setPodcasts(podcasts)
      setLoading(false)
    })
  }, [])

  return {
    podcasts,
    isLoading,
  }
}
