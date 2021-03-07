import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon({ socialIcon, link }) {
  return (
    <SocialIconStyled href={link} rel="noopener noreferrer">
      <FontAwesomeIcon icon={socialIcon} />
    </SocialIconStyled>
  );
}

const SocialIconStyled = styled.a`
  background-color: var(--dark);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-right: 1.5rem;
  color: var(--white);

  font-size: 1.6rem;

  &:hover {
    background-color: var(--primaryDark);
    color: var(--white);
    cursor: pointer;
  }
`;

export default SocialIcon;
