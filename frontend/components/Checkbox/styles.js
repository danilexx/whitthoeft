import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  margin: 10px 0;
  cursor: pointer;
`;

export const CheckboxMarker = styled.img.attrs({
  src: "/icons/marked.svg",
  alt: "marker",
})`
  margin: 0 5px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  transition: background-color 0.1s ease-in-out;
  border: 1px solid ${props => props.theme.gray};
  background-color: ${props =>
    props.isOn ? props.theme.green : props.theme.white};
  padding: 3px;
  box-shadow: ${props => props.theme.shadow};
`;

export const CheckboxLabel = styled.p`
  font-family: Roboto;
  text-align: center;
  flex: 1;
  margin: 0 10px;
  user-select: none;
`;
