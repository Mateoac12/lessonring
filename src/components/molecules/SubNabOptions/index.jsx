import SubNavbarOption from "components/atoms/SubNavbarOption"
import { Menu, MenuBox } from "./styles"

export const SubNavOptions = ({ menu }) => {
  return <MenuBox>
    <Menu>
      {
        menu.map(subOption => <SubNavbarOption key={subOption.id} {...subOption} />)
      }
    </Menu>
  </MenuBox>
}

export default SubNavOptions