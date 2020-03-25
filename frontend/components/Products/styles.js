import styled from "styled-components";
import Image from "../Image";

export const ProductContainer = styled.div`
  position: relative;
  width: 250px;
  margin: 10px;
  box-shadow: 4px 4px 12px rgba(187, 187, 187, 0.25),
    -5px 4px 7px rgba(139, 139, 139, 0.25);
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Info = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const baseText = styled.p`
  margin: 5px;
  font-size: 14px;
  font-family: Bitter;
`;

export const Title = styled(baseText)`
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  color: ${props => props.theme.black};
`;

export const OldPrice = styled(baseText)`
  text-decoration-line: line-through;
  font-size: 12px;
  color: ${props => props.theme.grey};
`;

export const PriceDesc = styled(baseText)``;

export const Price = styled(baseText)``;

export const ImageContainer = styled.div`
  /* height: fit-content; */
  width: 100%;
  height: 250px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  margin: 10px auto;
`;
