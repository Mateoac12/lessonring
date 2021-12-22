import logo from 'assets/logo/logo.svg'
import { Link } from 'wouter'

import { LogoBox, LogoImage } from './styles'

const Logo = () => {
  return <LogoBox>
    <Link href="/">
      <LogoImage src={logo} alt='LessonRing' />
    </Link>
  </LogoBox>
}

export default Logo