import styled from '@emotion/styled'
import { Link } from 'wouter'
import { global } from 'theme/global'

export const SubOption = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #161616;
  background-color: ${global.color.gray[2]};
  border-radius: ${global.r[1]};

  padding: ${global.p[2]} ${global.p[3]};
  padding-left: ${global.p[2]};

  transition: filter 0.2s ease;

  :hover {
    filter: brightness(0.95);
  }
`

export const IconImage = styled.img`
  max-width: 64px;
  margin-right: 16px;
  margin-left: 16px;
`

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 400;
`

export const Description = styled.p`
  margin-top: 8px;
  color: #808080;
`
