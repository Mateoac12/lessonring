import styled from '@emotion/styled'
import { global } from 'theme/global'
import { Link } from 'wouter'

export const OptionBox = styled.li`
  position: relative;
`

export const Option = styled(Link)`
  padding: ${global.p[2]} ${global.p[3]};
  margin: 0 ${global.m[1]};
  background-color: ${global.color.gray[1]};
  color: ${global.color.primary};
  font-size: 18px;
  text-decoration: none;
  border-radius: ${global.r[2]};
  transition: filter 0.2s ease;

  :hover {
    filter: brightness(0.95);
  }
`

export const ArrowIcon = styled.img`
  width: 12px;
  margin-bottom: 2px;
  margin-left: 8px;
`
