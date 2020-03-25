import styled, { css } from "styled-components";
import { InputTemplate } from "../Field";
import Button from "../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SendContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

export const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const CommentField = styled(InputTemplate).attrs({
  as: "textarea",
  placeholder: "Escreva seu comentario aqui",
  rows: "4",
})`
  height: 100px;
  padding: 10px;
  resize: none;
  margin: 0;
`;

export const SendButton = styled(Button).attrs({
  primary: true,
  label: "Enviar",
})`
  width: 300px;
  margin: 0 20px;
`;

export const StarContainer = styled.svg`
  ${props =>
    props.editable &&
    css`
      &:hover {
        cursor: pointer;
        path {
          transition: 0.2s ease-in-out;
          transition-property: fill, opacity;
          fill: ${props.theme.starColor};
          opacity: 0.8;
        }
      }
    `}
`;

export const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
  /* width: 80%; */
  width: 100%;
  min-height: 80px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${props => props.theme.gray};
`;

export const CommentPhoto = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 5px;
`;

export const CommentInfo = styled.div`
  margin: 0 20px;
  height: 100%;
  align-self: flex-start;
`;

const BaseText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.theme.black};
`;

export const UserName = styled(BaseText)`
  font-size: 18px;
  font-weight: bold;
`;

export const CommentLabel = styled(BaseText)`
  margin-top: 5px;
`;
