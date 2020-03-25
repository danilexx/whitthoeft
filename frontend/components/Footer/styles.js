import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 35px;
  background-color: ${props => props.theme.white};
  padding: 30px 100px;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 50px;
  width: 200px;
  /* flex: 2 2 !important; */
`;

export const FooterBadge = styled.img.attrs({
  src: "/icons/footerBadge.svg",
  alt: "Compra segura",
})`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: fit-content;
`;

export const PaymentInfoLabel = styled.p`
  font-family: Oswald;
  font-size: 14px;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const PaymentImg = styled.img`
  margin: 0 10px;
  width: 33%;
`;

export const FooterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 15px;
  padding: 0 10px;
`;

export const Label = styled.p`
  font-size: 24px;
  font-family: Roboto;
  text-align: center;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const LinkContainer = styled.a`
  font-size: 18px;
  font-family: "Roboto";
  margin: 5px 0;
  color: ${props => props.theme.grey};
  cursor: pointer;
  @media screen and (hover: hover) and (pointer: fine) {
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${props => props.theme.black};
    }
  }
`;
const iconSize = 64;
export const FacebookIcon = styled.img.attrs({
  src: "/icons/facebook.svg",
  alt: "facebook",
})`
  height: ${iconSize}px;
  width: ${iconSize}px;
`;
