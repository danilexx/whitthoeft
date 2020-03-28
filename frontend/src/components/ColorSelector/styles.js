import styled from "styled-components";
import { BaseSelector } from "../publicStyles";


export const ColorSelectorContainer = styled(BaseSelector)`
  background-color: ${props => props.color};
`;
