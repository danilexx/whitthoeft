import styled from "styled-components";
import LinkedButton from "../LinkedButton";
import Button from "!/Button";

export const Container = styled.div`
  padding: 30px 0;
`;

export const ButtonsContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const CustomLinkedButton = styled(LinkedButton)`
  margin: 10px 0;
`;

export const CustomButton = styled(CustomLinkedButton).attrs({
  as: Button,
})``;
