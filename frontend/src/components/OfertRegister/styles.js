import styled from "styled-components";
import Field from "../Field";
import Button from "../Button";

export const Container = styled.div`
  width: fit-content;
  min-width: 80%;
  margin: 15px auto;
  background-color: ${props => props.theme.gray};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 50px;
`;

export const MiniHeader = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: ${props => props.theme.black};
  font-family: "Roboto";
  margin-bottom: 15px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const RegisterField = styled(Field).attrs({
  placeholder: "Digite seu email",
})`
  background-color: ${props => props.theme.white};
  flex: 2;
`;

export const RegisterButton = styled(Button).attrs({
  primary: true,
  label: "Cadastrar",
})`
  flex: 1;
  height: 50px;
`;
