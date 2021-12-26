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
