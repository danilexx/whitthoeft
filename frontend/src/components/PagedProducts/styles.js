import styled from "styled-components";
import Products from "!/Products";

export const Container = styled.div`
  width: 300px;
  /* margin: 0 50px; */
  flex: 1;
`;
export const TopInfoContainer = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Title = styled.p`
  margin: 20px 0;
  font-family: Bitter;
  font-size: 34px;
  font-weight: bold;
  letter-spacing: 0.24rem;
`;

export const MyProducts = styled(Products)`
  width: 100%;
  margin: 0;
`;
