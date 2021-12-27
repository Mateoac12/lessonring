import { Article, ArticleImage, ArticleTitle } from "./styles"

const ArticleItem = ({ attributes }) => {
  return <Article>
    <ArticleImage src={`http://localhost:1337${attributes.image.data.attributes.url}`} />
    <ArticleTitle>{attributes.name}</ArticleTitle>
  </Article>
}

export default ArticleItem