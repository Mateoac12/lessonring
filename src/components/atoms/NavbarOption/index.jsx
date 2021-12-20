import { useDropdown } from "hook/useDropdown"
import arrowIcon from "assets/symbols/arrow-down.svg"
import SubNavOptions from "components/molecules/SubNabOptions"
import { ArrowIcon, Option, OptionBox } from "./styles"

const NavbarOption = ({ name, path, menu }) => {
  const { isShow, setHide, setShow } = useDropdown()

  const showOptions = isShow && menu
  const haveOptions = menu && menu.length > 0

  return <OptionBox onMouseEnter={setShow} onMouseLeave={setHide}>
    <Option href={path}>
      {name}
      {haveOptions && <ArrowIcon src={arrowIcon} alt="arrow" />}
    </Option>
    {
      showOptions && <SubNavOptions menu={menu} show={setShow} hide={setHide} />
    }
  </OptionBox>
}

export default NavbarOption