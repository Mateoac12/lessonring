import SubNavbarOption from "components/atoms/SubNavbarOption"
import { Menu, MenuBox } from "./styles"

export const SubNavOptions = ({ subcategories, lastPath }) => {
  return <MenuBox>
    <Menu>
      {
        subcategories.map(subOption => <SubNavbarOption key={subOption.id} {...subOption} lastPath={lastPath} />)
      }
    </Menu>
  </MenuBox>
}

export default SubNavOptions