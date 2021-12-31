import { generateQuery } from './utils/generateQuery'

export const getProgrammingRoadmap = async () => {
  const query = generateQuery({
    fieldName: 'populate',
    queries: ['courses', 'courses.icon'],
  })

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
    icon: course.attributes.icon.data.attributes,
  }))

  return course
}
