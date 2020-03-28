import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding: 10px 0;
  margin-bottom: 10px;
`;
const size = 64;
const BaseSquare = styled.div`
  cursor: pointer;
  margin: 0 5px;
  user-select: none;
  width: ${size}px;
  height: ${size}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const BaseSquareImg = styled(BaseSquare).attrs({
  as: "img",
})`
  width: ${size * 2}px;
  padding: ${size / 3}px;
`;

export const PrevArrow = styled(BaseSquareImg).attrs({
  src: "/icons/prevArrow.svg",
  alt: "prev-arrow",
})``;

export const NextArrow = styled(BaseSquareImg).attrs({
  src: "/icons/nextArrow.svg",
  alt: "next-arrow",
})``;

export const PageNumber = styled(BaseSquare)`
  color: ${props => props.theme.black};
  font-size: ${size / 3}px;
  text-align: center;
  font-family: Roboto;

  ${props =>
    props.isSelected &&
    css`
      color: ${props.theme.white};
      background-color: ${props.theme.black};
      border: none;
    `}
`;
