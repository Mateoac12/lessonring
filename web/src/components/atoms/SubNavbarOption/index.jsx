import { Description, IconImage, SubOption, Title } from "./styles"

const SubNavbarOption = ({ name, lastPath, description, icon }) => {
  const iconImage = `http://localhost:1337${icon.data.attributes.url}`

  return <>
    <li>
      <SubOption to={`/${encodeURI(lastPath)}/${encodeURI(name)}`}>
        {iconImage && <IconImage src={iconImage} alt={name} />}
        <div>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </div>
      </SubOption>
    </li>
  </>
}

export default SubNavbarOption