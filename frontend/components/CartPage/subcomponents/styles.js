import styled from "styled-components";
import { DeleteButton } from "!/publicStyles";
import Button from "-/components/Button";
import { TableContainer } from "../styles";
import Field from "-/components/Field";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-width: 300px;
`;

export const TableHeader = styled(TableContainer)`
  margin: 5px 0;
`;

export const Title = styled.div`
  height: 100%;
  flex: ${props => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.gray};
  &:first-of-type {
    justify-content: flex-start;
    text-indent: 20px;
  }
  &:last-of-type {
    border-right: none;
  }
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.theme.black};
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray};
  border-radius: 10px;
  width: 100%;
  margin: 10px 0;
`;

export const TableElement = styled.div`
  flex: ${props => props.size};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-size: 18px;
  color: ${props => props.theme.black};
`;

export const Products = styled.div`
  /* margin: 15px 0; */
`;

export const Product = styled(TableElement)`
  cursor: pointer;
  justify-content: flex-start;
`;

const PHOTO_SIZE = 90;

export const Photo = styled.img`
  height: ${PHOTO_SIZE}px;
  width: ${PHOTO_SIZE}px;
  margin: 15px;
  border-radius: 10px;
`;

export const TrashIcon = styled(DeleteButton)`
  will-change: transform;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Name = styled.p`
  margin: 0 20px;
  flex: 1;
`;

export const Price = styled(TableElement)``;

export const Quantity = styled(TableElement)``;

export const Remove = styled(TableElement)``;

export const TallRow = styled(TableContainer)`
  /* padding: 35px 0; */
  height: fit-content;
  margin: 5px 0;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-size: 18px;
  color: ${props => props.theme.black};
  margin: 0 20px;
  margin-right: 10px;
  width: 70px;
`;

export const RowButton = styled(Button)`
  height: 50px;
  flex: 0;
  margin: 0 10px;
  padding: 0 40px;
  width: 100px;
`;

export const RowField = styled(Field)`
  flex: 0;
  width: 300px;
`;

export const RowElement = styled(TableElement)`
  padding: 10px;
  justify-content: flex-start;
`;

const quantityText = styled.div`
  color: ${props => props.theme.grey};
  font-size: 30px;
  font-family: Roboto;
  margin: 0 10px;
  cursor: pointer;
  min-width: 10px;
  padding: 0 10px;
  &:hover {
    color: ${props => props.theme.black};
  }
`;

export const Plus = styled(quantityText)``;

export const Minus = styled(quantityText)``;

export const NumberInput = styled.input.attrs({
  min: "1",
  max: "99",
})`
  border: none;
  text-align: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-family: Roboto;
  color: ${props => props.theme.black};
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`;