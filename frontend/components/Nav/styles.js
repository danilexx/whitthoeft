import styled, { css } from "styled-components";
import { LogoIcon } from "./icons";
import Button from "!/Button";
import { DeleteButton, BaseSelector, BaseSelectorWithoutHover } from "../publicStyles";

export const FakeNav = styled.div`
  height: ${props => props.navSize || props.theme.navSize}px;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  min-height: ${props => props.theme.navSize}px;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0;
  font-family: Bitter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0 20px;
  cursor: pointer;
  color: ${props => props.theme.black};
  transition: fill 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.purple};
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Logo = styled(LogoIcon)`
  margin: 10px 0;
  width: 200px;
  height: auto;
`;
export const MyFilledSvg = styled.svg`
  cursor: pointer;

  path {
    transition: fill 0.2s ease-in-out;
    fill: ${props => props.theme.black};
  }
  &:hover {
    path {
      fill: ${props => props.theme.purple};
    }
  }
  ${props =>
    props.isOn &&
    css`
      path {
        fill: ${props.theme.purple};
      }
    `}
`;
export const MySvg = styled(MyFilledSvg)`
  margin: 0 20px;
  width: 25px;
  height: auto;
`;
export const IconsContainer = styled(NavItemsContainer)`
  margin: 10px 0;
  width: fit-content;
`;

export const PopupContainer = styled.div`
  cursor: auto;
  padding: 10px;
  background-color: ${props => props.theme.white};
  width: ${props => props.width || "fit-content"};
  height: ${props => props.height || "fit-content"};
  transition: 0.2s ease-in-out;
  transition-property: opacity, transform;
  pointer-events: none;
  position: absolute;
  bottom: 0px;
  transform: translateY(115%);
  color: ${props => props.theme.black};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
  opacity: 0;
  z-index: 15;
  ${props =>
    props.isOn &&
    css`
      opacity: 1;
      transform: translateY(100%);
      pointer-events: all;
    `}
  opacity: ${props => (props.isOn ? 1 : 0)};
  border: 1px solid ${props => props.theme.gray};
  &:before{
    content: '';
    position: absolute;
    top: 5px;
    left: 50%;
    background-color: ${props => props.theme.white};
    transform: translate(-50%, -100%) rotate(45deg);
    width: 10px;
    height: 10px;
    border: 1px solid ${props => props.theme.gray};
    border-right: none;
    border-bottom: none;
  }
`;

export const DropDownIcon = styled.div`
  width: 8px;
  height: 8px;

  /* background-color: yellow; */

  border: 1px solid
    ${props => (props.isOn ? props.theme.purple : props.theme.black)};
  transition: 0.2s ease-in-out;
  transition-property: transform, border-color;
  transform-origin: center;
  transform: rotate(45deg) translateY(4px);
  border-bottom: none;
  border-right: none;
`;

export const DropDownContainer = styled.div`
  margin-left: 15px;
  width: fit-content;
  height: fit-content;
  transition: transform 0.2s ease-in-out;
  transform-origin: left;
  transform: ${props => props.isOn && "rotate(180deg)"};
`;

export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 90%;
  /* padding: 0 20px; */
  margin: 0 auto;
`;

export const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: auto;
`;

export const EmptyCartInfo = styled.p`
  font-family: bitter;
  text-align: center;
  width: 100%;
`;

export const ProductsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  border: 1px solid ${props => props.theme.gray};
  box-shadow: ${props => props.theme.shadow};
  border-radius: 5px;
  padding: 10px 10px;
  margin: 5px 0;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
`;

export const ProductCardImage = styled.img`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.gray};
  width: 40px;
  height: 40px;
`;

export const ProductCardName = styled.p`
  font-size: 16px;
  font-family: Roboto;
  flex: 1;
  color: ${props => props.theme.black};
  max-width: 45%;
  text-align: center;
`;

export const ProductCardDeleteButton = styled(DeleteButton)`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-4px);
  }
`;

const quantitySize = 32;

export const ProductQuantity = styled(BaseSelectorWithoutHover)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.white};
  font-size: 16px;
  color: ${props => props.theme.black};
  height: ${quantitySize}px;
  width: ${quantitySize}px;
  text-align: center;
  font-family: Roboto;
`;

export const MoreProductsInfo = styled.p`
  color: ${props => props.theme.grey};
  font-size: 14px;
  font-family: Roboto;
  text-align: center;
  width: 100%;
  margin: 10px 0;
`;
