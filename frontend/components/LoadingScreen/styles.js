import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 0;
  opacity: ${props => props.isLoading ? 1 : 0};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
`