import styled from "styled-components";

export const Container = styled.div`
  margin: 10px auto;
  margin-top: 30px;
  width: 80%;
  position: relative;
  height: fit-content;
`;

export const Slide = styled.img`
  opacity: ${props => (props.isActive ? 1 : 0)};
  width: 100%;
  height: 300px;
  box-shadow: ${props => props.theme.shadow};
  position: absolute;
  transition: opacity 0.2s ease-in-out;
  top: 0;
  object-fit: ${props => (props.cover ? "cover" : "none")};
  object-position: top;
  border-radius: 10px;
`;
const size = 45;
const iconSize = 12;
const AbsoluteIcon = styled.div`
  position: absolute;
  height: ${size}px;
  width: ${size}px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray};
  opacity: 0.8;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(calc(-50% - 5px));
  }
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% - 4px), -50%) rotate(45deg);
    content: "";
    height: ${iconSize}px;
    width: ${iconSize}px;
    transform-origin: center;
    border: 2px solid ${props => props.theme.black};
    border-bottom: none;
    border-left: none;
  }
`;

export const PreviousSlide = styled(AbsoluteIcon)`
  left: 40px;
  &:after {
    transform: translate(calc(-50% + 4px), -50%) rotate(225deg);
  }
`;
export const NextSlide = styled(AbsoluteIcon)`
  right: 40px;
`;

export const Dots = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;
export const Dot = styled.div`
  background-color: ${props =>
    props.isActive ? props.theme.black : props.theme.white};
  width: 10%;
  margin: 0 15px;
  cursor: pointer;
  height: 10px;
  opacity: 0.7;
  border-radius: 5px;
  transition: 0.2 ease-in-out;
  transition-property: background-color, opacity, transform;
  &:hover {
    opacity: 1;
  }
`;
