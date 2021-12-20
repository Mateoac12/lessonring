import styled from '@emotion/styled'
import { global } from 'theme/global'

export const Navbar = styled.ul`
  list-style: none;
  display: none;
  padding-left: 0;

  position: absolute;
  top: 50px;
  flex-direction: column;
  right: 8px;
  background-color: ${global.color.gray[1]};
  padding: 8px 0px;
  border-radius: 8px;

  ${({ show }) => show && 'display: flex;'}

  animation: fade-in-bottom 0.2s both;

  @keyframes fade-in-bottom {
    0% {
      transform: translateY(16px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (min-width: ${global.breackpoint.mobile}) {
    display: flex;
    position: relative;
    flex-direction: row;
    top: 0;
    right: 0;
    background-color: transparent;
  }
`

export const ModalButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${global.color.gray[1]};
  border-radius: 8px;
  border: 1px solid ${global.color.gray[1]};
  cursor: pointer;

  :hover {
    filter: brightness(0.98);
  }

  @media (min-width: ${global.breackpoint.mobile}) {
    display: none;
  }
`

export const MenuIcon = styled.img`
  width: 100%;
`
