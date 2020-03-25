import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
`;


export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

`

const BaseText = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.theme.black};
  padding: 0 20px;
`

export const Label = styled(BaseText)`
  font-size: 30px;
  
`

export const Description = styled(BaseText)`
  color: ${props=>props.theme.grey};
  margin: 5px 0;
`