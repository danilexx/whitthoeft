import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5% 0;
`;

export const TableContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Table = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-width: 300px;
`;

export const SadMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  font-family: Roboto;
  font-size: 30px;
  color: ${props => props.theme.black};
`;

export const VesgoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
