import styled from "styled-components";
import { SpinnerContainer } from "!/publicStyles";

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;

export const CustomImage = styled.img``;

export const CustomImageSpinnerContainer = styled(SpinnerContainer)`
  background-color: ${props => props.theme.white};
`;
