import styled from "styled-components";
import Field from "!/Field";

export const Container = styled.div`
  margin: 5px auto;
  width: 100%;
`;

export const StyledField = styled(Field)`
  height: 50px;
  width: 100%;
  flex: 1;
  padding: 10px;
  margin: 5px auto;
`;
export const StyledTextArea = styled.textarea`
  font-family: Roboto;
  padding: 5px 12px;
  background-color: ${props => props.theme.gray};
  color: ${props => props.theme.black};
  flex: 3;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.gray};
  height: 100px;
  resize: vertical;
  font-size: 18px;
  width: 100%;
  flex: 1;
  padding: 10px;
  margin: 5px auto;
  
`;

export const StyledLabel = styled.label`
  font-family: "Roboto";
  font-size: 18px;
  color: ${props => props.theme.black};
  margin: 5px 0;
`;
