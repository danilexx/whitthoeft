import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
`;

const size = 64;

export const Icon = styled.div`
  cursor: pointer;
  height: ${size}px;
  width: ${size}px;
  transition: all 0.2s ease-in-out;
  border: 1px solid
    ${props => (props.isFilled ? "transparent" : props.theme.gray)};
  padding: 15px;
  border-radius: 10px;
  background-color: ${props =>
    props.isFilled ? props.theme.black : props.theme.white};
`;

export const StepSvg = styled.svg`
  path {
    transition: all 0.2s ease-in-out;
    ${props =>
      props.stroked
        ? css`
            stroke: ${props =>
              props.isFilled ? props.theme.white : props.theme.black};
          `
        : css`
            fill: ${props =>
              props.isFilled ? props.theme.white : props.theme.black};
          `}
  }
`;

export const Passage = styled.div`
  width: 40px;
  height: 4px;
  background-color: ${props =>
    props.isFilled ? props.theme.black : props.theme.gray};
`;
