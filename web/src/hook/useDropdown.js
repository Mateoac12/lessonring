import { useState } from 'react'

export const useDropdown = () => {
  const [isShow, setIsMenu] = useState(false)

  const setShow = () => setIsMenu(true)
  const setHide = () => setIsMenu(false)
  const toggleMenu = () => setIsMenu((lastValue) => !lastValue)

  return {
    setShow,
    setHide,
    toggleMenu,
    isShow,
  }
}
