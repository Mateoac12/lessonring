import { useDropdown } from "hook/useDropdown"
import arrowIcon from "assets/symbols/arrow-down.svg"
import SubNavOptions from "components/molecules/SubNabOptions"
import { ArrowIcon, Option, OptionBox } from "./styles"

const NavbarOption = ({ name, path, menu }) => {
  const { isShow, setHide, setShow } = useDropdown()

  return <OptionBox onMouseEnter={setShow} onMouseLeave={setHide}>
    <Option href={path}>
      {name}
      {!!menu && <ArrowIcon src={arrowIcon} alt="arrow" />}
    </Option>
    {
      menu && isShow && <SubNavOptions menu={menu} show={setShow} hide={setHide} />
    }
  </OptionBox>
}

export default NavbarOption