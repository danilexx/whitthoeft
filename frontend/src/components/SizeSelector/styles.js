import styled from "styled-components";
import { BaseSelector } from "../publicStyles";


export const SizeSelectorContainer = styled(BaseSelector)`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
`;
export const SizeSelectorLabel = styled.p`
  text-transform: uppercase;
  font-family: Roboto;
  color: ${props => props.theme.black};
  text-align: center;
  font-weight: bold;
`;


