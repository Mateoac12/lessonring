import styled from '@emotion/styled'
import { global } from 'theme/global'

export const HeaderBox = styled.header`
  background-color: ${global.color.gray[1]};
`

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  max-width: ${global.container['2xl']};
  margin-left: auto;
  margin-right: auto;
  padding: 0 8px;
`

export const Spacer = styled.div`
  flex: 1;
`
