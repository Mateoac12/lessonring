import MainTitle from "components/atoms/MainTitle"
import ArticleList from "components/molecules/ArticleList"
import { usePodcasts } from "hook/usePodcasts"

const PodcastPage = () => {
  const { podcasts, isLoading } = usePodcasts()
  return <>
    <MainTitle>Poscast</MainTitle>

    {
      isLoading
        ? <p>Loading...</p>
        : <ArticleList podcasts={podcasts} />
    }
  </>
}

export default PodcastPage