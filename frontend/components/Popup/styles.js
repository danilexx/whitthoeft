import styled from "styled-components";
import { DeleteButton } from "../publicStyles";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  pointer-events: none;
`;

export const PopupContainer = styled.div`
  height: fit-content;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.gray};
  transition: 0.2s ease-in-out;
  transition-property: opacity, transform;
  opacity: ${props => (props.isOn ? 1 : 0)};
  transform: ${props => (props.isOn ? "translateY(0px)" : "translateY(8px)")};
  pointer-events: ${props => (props.isOn ? "all" : "none")};
`;

export const PopupCloseButton = styled(DeleteButton)`
  margin: 10px;
  display: block;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.black};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 1px solid ${props => props.theme.gray};
  padding: 5px 10px;
`;

export const PopupTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 10px auto;
  text-align: center;
  padding: 0 15px;
  font-family: "Roboto";
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.theme.white};
`;
