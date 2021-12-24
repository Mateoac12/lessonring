import styled from '@emotion/styled'
import { global } from 'theme/global'

export const HeaderText = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  column-gap: 240px;
  row-gap: 20px;
`

export const MainTitle = styled.h1`
  color: ${global.color.primary};
  font-size: 80px;
  max-width: 800px;
  position: relative;
  z-index: -1;

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

export const EducationIcon = styled.img`
  width: 100%;
  max-width: 240px;
  justify-self: start;
`

export const BoxInformation = styled.div`
  margin-top: 64px;
  margin-bottom: 40px;
  box-size: border-box;
  padding: 40px 0px;
  border-radius: 8px;
`

export const TitleInformation = styled.h2`
  color: ${global.color.primary};
  font-size: 32px;
  margin: 0;
  font-weight: bold;
`

export const TextInformation = styled.p`
  line-height: 1.4;
  font-size: 18px;
  color: #161616; ;
`
