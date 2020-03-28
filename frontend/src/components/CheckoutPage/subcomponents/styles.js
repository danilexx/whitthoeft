import styled from "styled-components";
import Select from "-/components/Select";

export const TableFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.gray};
  background-color: ${props => props.theme.white};
  padding: 0 10px;
  margin-bottom: 10px;
`;

const baseText = styled.p`
  font-family: Roboto;
  font-size: 14px;
`;

export const SubPrice = styled(baseText)`
  color: ${props => props.theme.gray};
  margin: 15px 5px;
`;

export const Separator = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 1px;
  background-color: ${props => props.theme.gray};
`;

export const TotalPrice = styled(baseText)`
  font-size: 18px;
  margin: 15px 5px;
  color: ${props => props.theme.black};
`;

export const LongSelect = styled(Select)`
  height: fit-content;
  width: fit-content;
`;

export const CenterContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 300px;
  border: 1px solid ${props => props.theme.gray};
  background-color: ${props => props.theme.white};
  margin: 10px auto;
  padding: 20px 10px;
  border-radius: 15px;
`;

export const AddressRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Roboto;
  color: ${props => props.theme.black};
  font-size: 18px;
  margin: 5px 0;
`