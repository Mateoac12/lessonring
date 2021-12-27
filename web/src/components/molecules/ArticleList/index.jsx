import ArticleItem from "components/atoms/ArticleItem"
import { ArticleBox } from "./styles"

const ArticleList = ({ podcasts = [] }) => {
  return <ArticleBox>
    {
      podcasts.map(({ attributes, id }) => <ArticleItem key={id} attributes={attributes} />)
    }
  </ArticleBox>
}

export default ArticleList