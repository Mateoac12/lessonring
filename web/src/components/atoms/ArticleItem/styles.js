import styled from '@emotion/styled'
import { global } from 'theme/global'

export const Article = styled.article`
  display: flex;
  padding: 8px;
  border: 1px solid ${global.color.gray[3]};
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px 8px #f8f8f850;

  transition: box-shadow 0.25s ease;

  :hover {
    box-shadow: 0 2px 8px 8px #f8f8f8;
  }
`

export const ArticleImage = styled.img`
  border-radius: 8px;
  width: 80px;
  height: 80px;
`

export const ArticleTitle = styled.p`
  flex: 1;
  margin: 0 16px;
`
