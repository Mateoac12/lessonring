import styled from '@emotion/styled'
import { global } from 'theme/global'
import { Link } from 'wouter'

export const OptionBox = styled.li`
  position: relative;
`

export const Option = styled(Link)`
  padding: 8px 16px;
  margin: 2px 0;
  display: block;
  color: ${global.color.primary};
  font-size: 18px;
  text-decoration: none;
  transition: filter 0.2s ease;

  :hover {
    filter: brightness(0.95);
  }

  @media (min-width: ${global.breackpoint.mobile}) {
    display: inline-block;
    padding: ${global.p[2]} ${global.p[3]};
    margin: 0 ${global.m[1]};
    background-color: ${global.color.gray[1]};
    border-radius: ${global.r[2]};
  }
`

export const ArrowIcon = styled.img`
  display: none;

  @media (min-width: ${global.breackpoint.mobile}) {
    display: inline;
    width: 12px;
    margin-bottom: 2px;
    margin-left: 8px;
  }
`
