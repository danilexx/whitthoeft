import styled from "styled-components";
import Image from "!/Image";

export const ProductImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  width: fit-content;
  margin: 20px 0;
`;

export const ProductCurrentImage = styled(Image)`
  height: 500px;
  width: 450px;
  margin: 0 auto;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const ProductOtherImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px 0;
  cursor: pointer;
`;

export const ProductOtherImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 5px;
`;
