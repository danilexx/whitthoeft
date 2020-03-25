import styled from "styled-components";

export const Input = styled.input`
  font-family: Roboto;
  padding: 5px 12px;
  background-color: ${props => props.theme.gray};
  color: ${props => props.theme.black};
  flex: 3;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.gray};
  height: 50px;
  font-size: 18px;
  /* box-shadow: ${props => props.theme.shadow}; */
`;
