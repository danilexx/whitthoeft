import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  ${props =>
    props.isOn &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const SearchField = styled.input`
  height: 100%;
  font-size: 30px;
  font-family: Roboto;
  text-indent: 14px;
  border: none;
  flex: 1;
  border-bottom: 1px solid ${props => props.theme.gray};
`;

export const SearchResults = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  width: 100%;
  max-height: 50vh;
  overflow: auto;
  box-shadow: ${props => props.theme.shadow};
`;

export const SearchResult = styled.div`
  width: 100%;
  font-size: 22px;
  font-family: Roboto;
  background-color: ${props => props.theme.white};
  padding: 15px 10px;
  border-bottom: 1px solid ${props => props.theme.gray};
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.gray};
  }
  &:last-of-type {
    /* border: none; */
  }
`;

export const Close = styled.img.attrs({
  src: "/icons/delete.svg",
  alt: "clear",
})`
  height: 100%;
  width: auto;
  padding: 30px;
  background-color: ${props => props.theme.gray};
  transition: background-color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.red};
  }
`;
