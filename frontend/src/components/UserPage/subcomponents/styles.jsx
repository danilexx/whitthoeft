import styled, { css } from "styled-components";
import Cards from "react-credit-cards";
import { forwardRef } from "react";
import { StyledForm, BaseSelector } from "!/publicStyles";

export const HiddeableForm = styled(StyledForm)`
  ${props =>
    props.isHidden &&
    css`
      height: 0;
      opacity: 0;
      pointer-events: none;
    `}
`;

export const Addresses = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 15px;
  font-family: Roboto;
  color: ${props => props.theme.black};
  font-size: 18px;
`;
const size = 40;

export const FloatingContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 5px;
`;

export const AuxiliaryButton = styled(BaseSelector)`
  transition: transform 0.2s ease-in-out;
  height: ${size}px;
  width: ${size}px;
  padding: 8px;
  margin: 5px;
`;

export const EditButton = styled(AuxiliaryButton).attrs({
  as: "img",
  src: "/icons/edit.svg",
  alt: "Edit",
})``;

export const CheckButton = styled(AuxiliaryButton).attrs({
  as: "img",
  src: "/icons/marked.svg",
  alt: "Checked",
})`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  background-color: ${props => props.theme.green};
  transform: translate(25%, -25%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  ${props => props.active && css`
    opacity: 1;
    pointer-events: all;
  `}
`;

export const DeleteButton = styled(AuxiliaryButton).attrs({
  as: "img",
  src: "/icons/garbage.svg",
  alt: "Delete",
})`
  background-color: ${props => props.theme.red};
`;

export const AddressCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.gray};
  transition: all 0.2s ease-in-out;
  ${props =>
    props.isSelected &&
    css`
      border: 2px solid ${props.theme.black};
    `}
  ${props =>
    props.hoverable &&
    css`
      cursor: pointer;
    `}
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  margin: 15px auto;
  }
`;

const StyledCardContainer = styled.div`
  margin: 20px auto;
`;

export const StyledCard = forwardRef(({ className, ...props }, ref) => {
  return (
    <StyledCardContainer className={className} ref={ref}>
      <Cards
        acceptedCards={["visa", "hypercard", "mastercard"]}
        locale={{ valid: "Validade" }}
        placeholders={{ name: "SEU NOME AQUI" }}
        {...props}
      />
    </StyledCardContainer>
  );
});

export const Payments = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentCard = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  ${props =>
    props.hoverable &&
    css`
      cursor: pointer;
    `}
`;
