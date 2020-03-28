import styled from "styled-components";
import Button from "!/Button";

export const Container = styled.div`
  /* padding: 20px; */
`;

const BaseText = styled.p`
  font-size: 14px;
  font-family: Oswald;
  color: ${props => props.theme.black};
`;

export const Breadcumb = styled(BaseText)`
  /* font-size: 12px; */
`;

export const Title = styled(BaseText)`
  font-family: Bitter;
  font-size: 30px;
  width: 100%;
  text-transform: uppercase;
  margin: 10px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OldPrice = styled(BaseText)`
  text-transform: uppercase;
  text-decoration-line: line-through;
  color: ${props => props.theme.gray};
`;

export const Price = styled(BaseText)`
  font-weight: bold;
  font-size: 24px;
`;

export const ParceledPrice = styled(BaseText)`
  font-size: 13px;
`;

export const PropRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const PropRowTitle = styled(BaseText)`
  text-align: left;
  text-indent: 5px;
  font-size: 20px;
  width: 100%;
`;

export const PropRowMainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
`;

export const ShareIcon = styled.img.attrs({
  src: "/icons/share.svg",
  alt: "share",
})`
  padding: 12px;
  width: 100px;
  height: 50px;
`;

export const ShareButtonContainer = styled(Button)`
  width: fit-content;
  height: fit-content;
  margin: 0 10px;
  padding: 0;
`;
