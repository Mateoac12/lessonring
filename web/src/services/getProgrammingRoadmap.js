import { generateQuery } from './utils/generateQuery'

export const getProgrammingRoadmap = async () => {
  const query = generateQuery(['courses'])

  return await fetch(`http://localhost:1337/api/programming-roadmaps?${query}`)
    .then((res) => res.json())
    .then(({ data }) =>
      data.map((roadmap) => ({
        id: roadmap.id,
        ...roadmap.attributes,
        courses: getCourses(roadmap),
      }))
    )
}

const getCourses = (data) => {
  const [course] = data.attributes.courses.data.map((course) => ({
    id: course.id,
    ...course.attributes,
  }))

  return course
}
