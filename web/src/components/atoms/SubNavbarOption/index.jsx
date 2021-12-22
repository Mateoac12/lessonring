import { Description, IconImage, SubOption, Title } from "./styles"

const SubNavbarOption = ({ name, path, description, icon }) => {
  return <>
    <li>
      <SubOption to={path}>
        {icon && <IconImage src={icon} alt={name} />}
        <div>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </div>
      </SubOption>
    </li>
  </>
}

export default SubNavbarOption