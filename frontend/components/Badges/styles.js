import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`;
export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  width: 200px;
  height: 100px;
  margin: 10px;
  flex: 1;
`;
export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin: 10px;
`;
const baseText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  margin: 5px 0;
`;
export const Title = styled(baseText)`
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.black};
`;
export const Label = styled(baseText)`
  text-transform: uppercase;
  color: ${props => props.theme.grey};
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;
