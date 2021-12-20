import NavbarOption from "components/atoms/NavbarOption"
import { NAVBAR_OPTIONS } from "config/interface/navbar"
import { useDropdown } from "hook/useDropdown"

import menuIcon from 'assets/symbols/menu.svg'
import cancelIcon from 'assets/symbols/cancel.svg'

import { MenuIcon, ModalButton, Navbar } from "./styles"

const NavbarOptions = () => {
  const { isShow, toggleMenu } = useDropdown()

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
        NAVBAR_OPTIONS.map(option =>
          <NavbarOption key={option.id} {...option} />
        )
      }
    </Navbar>
  </>
}

export default NavbarOptions