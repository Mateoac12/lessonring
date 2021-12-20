import { useState } from 'react'

export const useDropdown = () => {
  const [isShow, setIsMenu] = useState(false)

  const setShow = () => setIsMenu(true)
  const setHide = () => setIsMenu(false)

  return {
    setShow,
    setHide,
    isShow,
  }
}
