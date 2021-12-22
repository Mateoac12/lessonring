import NavbarOption from "components/atoms/NavbarOption"
import { useDropdown } from "hook/useDropdown"

import menuIcon from 'assets/symbols/menu.svg'
import cancelIcon from 'assets/symbols/cancel.svg'

import { MenuIcon, ModalButton, Navbar } from "./styles"
import Placeholder from "./Placeholder"
import { useCategories } from "hook/useCategories"

const NavbarOptions = () => {
  const { isShow, toggleMenu } = useDropdown()
  const { categories, isLoading } = useCategories()

  if (isLoading) return <Placeholder />

  return <>
    <ModalButton onClick={toggleMenu}>
      {
        isShow
          ? <MenuIcon src={cancelIcon} alt="cancel" />
          : <MenuIcon src={menuIcon} alt="menu" />
      }
    </ModalButton>
    <Navbar show={isShow}>
      {
        categories.map(option =>
          <NavbarOption key={option.id} {...option} />
        )
      }
    </Navbar>
  </>
}

export default NavbarOptions