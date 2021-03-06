import { Card, CardIcon, CardTitle } from "./styles"

const TargetCouse = ({ course, id }) => {
  return <>
    <Card id={id}>
      <CardTitle>{course.name}</CardTitle>
      <CardIcon src={`http://localhost:1337${course.icon.url}`} />
    </Card>

  </>
}

export default TargetCouse