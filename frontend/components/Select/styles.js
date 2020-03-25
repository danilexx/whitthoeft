import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  height: fit-content;
  position: relative;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray};
  cursor: pointer;
  border-radius: 5px;
  /* width: 100px; */
  user-select: none;
`;
const baseText = styled.div`
  color: ${props => props.theme.black};
  font-family: Roboto;
  font-size: 16px;
`;
export const MainLabel = styled(baseText)`
  /* margin: 0 10px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
`;

export const Options = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  min-width: 100px;
  width: fit-content;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  /* box-shadow: ${props => props.theme.shadow}; */
  /* margin: 5px 0; */
  transform: translateY(45px);
  opacity: ${props => (props.isOn ? 1 : 0)};
  pointer-events: ${props => (props.isOn ? "all" : "none")};
  z-index: 15;
`;

export const OptionContainer = styled(baseText)`
  text-align: center;
  font-size: 12px;
  font-weight: normal;
  padding: 10px 10px;
  margin: 0;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${props => props.theme.grey};
    color: ${props => props.theme.white};
  }
`;

export const Arrow = styled.img.attrs({
  src: "/icons/arrow.svg",
  alt: "arrow",
})`
  /* height: 10px; */
  width: 15px;
  margin: 0 10px;
  transition: transform 0.2s ease-in-out;
  transform: ${props => props.isOn && "rotate(180deg)"};
`;

export const Label = styled.p`
  display: block;
  width: fit-content;
  /* max-width: 100px; */
  overflow: none;
  margin: 0;
`;
