import styled from "styled-components";

const size = 45;

export const Container = styled.div`
  position: absolute;
  width: ${size}px;
  height: ${size}px;
  top: 0;
  left: 0;
  padding: 8px;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray};
  /* box-shadow: ${props => props.theme.shadow}; */
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translate(-2px, -2px);
  cursor: pointer;
`;
