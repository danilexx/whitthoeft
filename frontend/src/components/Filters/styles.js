import styled, { css } from "styled-components";
import Button from "!/Button";

export const Container = styled.div`
  width: fit-content;
  padding: 10px 20px;
`;

export const FilterSectionTitleContainer = styled.p`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-family: Roboto;
  margin: 10px 0;
`;

export const FilterContainer = styled.div`
  padding: 0 20px;
  max-width: 300px;
`;

export const CheckboxesContainerRaw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const CheckboxesInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SizeSelectorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ColorSelectorsContainer = styled(SizeSelectorsContainer)``;

export const FilterButton = styled(Button)`
  margin: 10px auto;
  width: 80%;
`;

export const FilterTitle = styled.p`
  font-family: Bitter;
  font-size: 24px;
  letter-spacing: 0.12rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin: 10px 0;
`;
