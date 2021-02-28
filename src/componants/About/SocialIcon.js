import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colours } from "../../styles";

function SocialIcon({ socialIcon, link }) {
  return (
    <SocialIconStyled href={link} rel="noopener noreferrer">
      <FontAwesomeIcon icon={socialIcon} />
    </SocialIconStyled>
  );
}

const SocialIconStyled = styled.a`
  background-color: ${Colours.dark};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-right: 1.5rem;
  color: ${Colours.white};

  font-size: 1.6rem;

  &:hover {
    background-color: ${Colours.primaryDark};
    color: ${Colours.white};
    cursor: pointer;
  }
`;

export default SocialIcon;
