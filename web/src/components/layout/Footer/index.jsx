import { FooterContainer, FooterImageLink, LinkContent } from "./styles"
import personalLogo from 'assets/logo/MateoAlvarez.svg'

const Footer = () => {
  return <FooterContainer>
    <LinkContent href="https://mateo-alvarez.vercel.app/" target='_blank' rel="noreferrer">
      <FooterImageLink src={personalLogo} alt="Mateo Alvarez Logo" />
      <span>Mateo Álvarez</span>
    </LinkContent>
  </FooterContainer>
}

export default Footer