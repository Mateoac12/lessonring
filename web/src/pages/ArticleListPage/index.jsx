import MainTitle from "components/atoms/MainTitle"
import ArticleList from "components/molecules/ArticleList"
import Placeholder from "components/molecules/Placeholder"
import { useCategory } from "hook/useCategory"
import { usePodcasts } from "hook/usePodcasts"

const ArticleListPage = ({ params }) => {
  const { articleName } = params
  const { podcasts, isLoading } = usePodcasts()
  const { categoryInfo, isLoading: categoryLoader } = useCategory({ categoryName: articleName })

  const description = categoryInfo?.description

  return <>
    <MainTitle>{decodeURI(articleName)}</MainTitle>
    {categoryLoader
      ? <Placeholder w={300} h={20} />
      : <p>{description && description}</p>
    }
    {
      isLoading
        ? <p>Loading...</p>
        : <ArticleList podcasts={podcasts} />
    }
  </>
}

export default ArticleListPage