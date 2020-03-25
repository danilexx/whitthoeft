import styled, { css } from "styled-components";

export const ButtonLabel = styled.p`
  width: 100%;
  text-align: center;
  margin: 0;
  font-family: "Oswald";
  font-weight: 200;
  user-select: none;
  letter-spacing: 0.1em;
  font-size: 18px;
`;

export const ButtonContainer = styled.button`
  position: relative;
  cursor: pointer;
  background-color: ${props => {
    if (props.primary) {
      return props.theme.black;
    }
    if (props.red) {
      return props.theme.red;
    }
    return props.theme.white;
  }};
  width: 100%;
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
  border: ${props =>
    props.primary === false ? `1px solid ${props.theme.gray}` : "none"};
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  transition: transform 0.1s ease-in-out;
  ${props =>
    props.noFlex &&
    css`
      flex: initial;
      width: fit-content;
      padding-left: 20px;
      padding-right: 20px;
    `}
  p {
    color: ${props => {
      if (props.primary) {
        return props.theme.white;
      }
      if (props.red) {
        return props.theme.white;
      }
      return props.theme.black;
    }};
  }
  &:hover {
    transform: translateY(-5px);
  }
  &:active {
    opacity: 0.8;
  }
`;
