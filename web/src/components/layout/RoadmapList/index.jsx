import TargetCouse from "components/molecules/TargetCourse"
import { RoadmapContainer } from "./styles"

const RoadmapList = ({ roadmap }) => {
  return <RoadmapContainer>
    {
      roadmap.map(({ id, courses }) => <TargetCouse key={id} course={courses} id={id} />)
    }
  </RoadmapContainer>
}

export default RoadmapList