import NavbarOption from "components/atoms/NavbarOption"
import { NAVBAR_OPTIONS } from "config/interface/navbar"
import { Navbar } from "./styles"

const NavbarOptions = () => {
  return <>
    <Navbar>
      {
        NAVBAR_OPTIONS.map(option =>
          <NavbarOption key={option.id} {...option} />
        )
      }
    </Navbar>
  </>
}

export default NavbarOptions