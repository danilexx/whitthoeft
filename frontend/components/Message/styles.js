import styled from "styled-components";

export const Container = styled.div`
  margin: 10% 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
`;

export const Label = styled.p`
  font-family: "Roboto";
  font-size: 30px;
  text-align: center;
  color: ${props => props.theme.black};
`;
