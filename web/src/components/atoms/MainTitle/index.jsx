import { Title } from "./styles"

const MainTitle = ({ children }) => {
  return <Title data-text={children}>
    {children}
  </Title>
}

export default MainTitle