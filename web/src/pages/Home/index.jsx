import { BoxInformation, EducationIcon, HeaderText, TextInformation, TitleInformation } from "./styles"
import educationIcon from "assets/menuIcons/education.svg"
import { useProgrammingRoadmap } from "hook/useProgrammingRoadmap"
import RoadmapList from "components/layout/RoadmapList"
import MainTitle from "components/atoms/MainTitle"

const HomePage = () => {
  const { isLoading, programmingRoadmap } = useProgrammingRoadmap()

  return <>
    <HeaderText>
      <MainTitle>Recopilación de todo el material educativo que recomiendo!</MainTitle>
      <EducationIcon src={educationIcon} />
    </HeaderText>
    <BoxInformation>
      <TitleInformation>Guia de estudio en desarrollo web!</TitleInformation>
      <TextInformation>Desde que empecé a programar, el 80% de mi aprendizaje fue de contenido gratuito en YouTube. Y cuando uno comienza es difícil saber cuál contenido es el correcto. Por eso dejo mi roadmap que considero a día de hoy, que es muy bueno para empezar a programar, con buenas prácticas y buen contenido.</TextInformation>
    </BoxInformation>
    {
      isLoading ?
        <div>Cargando...</div>
        : <RoadmapList roadmap={programmingRoadmap} />
    }
  </>
}

export default HomePage