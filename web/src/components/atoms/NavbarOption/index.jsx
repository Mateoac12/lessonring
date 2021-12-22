import { useDropdown } from "hook/useDropdown"
import arrowIcon from "assets/symbols/arrow-down.svg"
import SubNavOptions from "components/molecules/SubNabOptions"
import { ArrowIcon, Option, OptionBox } from "./styles"

const NavbarOption = ({ name, path, subcategories }) => {
  const { isShow, setHide, setShow } = useDropdown()

  const haveOptions = subcategories && subcategories.length > 0
  const showOptions = isShow && haveOptions

  return <OptionBox onMouseEnter={setShow} onMouseLeave={setHide}>
    <Option href={path}>
      {name}
      {haveOptions && <ArrowIcon src={arrowIcon} alt="arrow" />}
    </Option>
    {
      showOptions && <SubNavOptions subcategories={subcategories} show={setShow} hide={setHide} />
    }
  </OptionBox>
}

export default NavbarOption