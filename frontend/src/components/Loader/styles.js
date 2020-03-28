import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.white};
  opacity: ${props => props.isLoading ? 1 : 0};
  transition: opacity 0.2s ease-in-out;
  pointer-events: ${props => props.isLoading ? "all" : "none"};
`