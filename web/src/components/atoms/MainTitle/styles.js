import styled from '@emotion/styled'
import { global } from 'theme/global'

export const Title = styled.h1`
  color: ${global.color.primary};
  font-size: 80px;
  max-width: 800px;
  position: relative;
  z-index: -1;
  margin: 16px 0;

  :before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    max-width: 800px;
    color: ${global.color.primary};
    clip-path: polygon(0 0, 100% 0, 100% 10%, 0% 100%);
    filter: brightness(0.8);
  }
`
