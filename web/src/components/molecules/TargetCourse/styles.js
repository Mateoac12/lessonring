import styled from '@emotion/styled'
import { global } from 'theme/global'

export const Card = styled.article`
  border: 1px solid ${global.color.gray[3]};
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px 8px #f8f8f850;
  width: max-content;
  min-width: 300px;

  position: relative;
  cursor: pointer;

  grid-column: ${({ id }) => id} / span 2;
  grid-row-start: ${({ id }) => id};

  transition: box-shadow 0.25s ease;

  :hover {
    box-shadow: 0 2px 8px 8px #f8f8f8;
  }
`

export const CardTitle = styled.h3`
  margin: 0;
`

export const CardIcon = styled.img`
  position: absolute;
  top: -8px;
  left: 16px;
  width: 24px;
`
