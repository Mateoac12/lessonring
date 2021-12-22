import SubNavbarOption from "components/atoms/SubNavbarOption"
import { Menu, MenuBox } from "./styles"

export const SubNavOptions = ({ subcategories }) => {
  return <MenuBox>
    <Menu>
      {
        subcategories.map(subOption => <SubNavbarOption key={subOption.id} {...subOption} />)
      }
    </Menu>
  </MenuBox>
}

export default SubNavOptions