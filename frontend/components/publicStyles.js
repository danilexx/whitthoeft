import styled from "styled-components";
import { Form } from "formik";
import Header from "!/Header";
import Field from "!/Field";
import Button from "!/Button";
import LoadingButton from "!/LoadingButton";

export const Marked = styled.img.attrs({
  src: "/icons/marked.svg",
  alt: "marked",
})`
  width: 20px;
  height: 20px;
  padding: 3px;
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.isMarked ? 1 : 0)};
  background-color: ${props => props.theme.green};
  border: 1px solid ${props => props.theme.gray};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  user-select: none;
`;
export const BaseSelectorWithoutHover = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
  /* box-shadow: ${props => props.theme.shadow}; */
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.2s ease-in-out;
`;
export const BaseSelector = styled(BaseSelectorWithoutHover)`
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${props => (props.noPadding ? "0" : "5% 0")};
`;

export const CustomHeader = styled(Header)``;

export const StyledForm = styled(Form)`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const RegisterField = styled(Field)`
  height: 50px;
  width: 100%;
  flex: 1;
  padding: 10px;
  margin: 5px 0;
`;

export const RegisterButton = styled(LoadingButton)`
  height: 50px;
  width: 100%;
  flex: 1;
`;

export const DeleteButton = styled.img.attrs({
  src: "/icons/delete.svg",
})`
  padding: 10px;
  background-color: ${props => props.theme.red};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
`;

export const SpinnerContainer = styled.div`
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;

  transform: translate(-50%, -50%);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReminderContainer = styled.div`
  padding: 20px 40px;
`;

export const ReminderLabel = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  color: ${props => props.theme.black};
  text-align: center;
  width: 100%;
  margin: 20px 0;
`;
