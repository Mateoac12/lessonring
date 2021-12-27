import styled from '@emotion/styled'
import { global } from 'theme/global'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid ${global.color.gray[3]};
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
`

export const ArticleImage = styled.img`
  border-radius: 8px;
`

export const ArticleTitle = styled.h3`
  font-size: 1.2rem;
`
