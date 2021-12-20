import styled from '@emotion/styled'
import { global } from 'theme/global'

export const MenuBox = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
`

export const Menu = styled.ul`
  margin-top: 24px;
  background-color: ${global.color.gray[2]};
  list-style: none;
  border-radius: 8px;
  padding: 8px;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  row-gap: 4px;
  outline: 24px solid transparent;

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
`
