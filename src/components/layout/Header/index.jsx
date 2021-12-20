import Logo from "components/atoms/Logo"
import NavbarOptions from "components/molecules/NavbarOptions"
import { ContentBox, HeaderBox, Spacer } from "./styles"

const Header = () => {
  return <>
    <HeaderBox>
      <ContentBox>
        <Logo />
        <NavbarOptions />
        <Spacer /> {/* for centrate navbar options */}
      </ContentBox>
    </HeaderBox>
  </>
}

export default Header