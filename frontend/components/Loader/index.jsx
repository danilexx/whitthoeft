import { SyncLoader } from "react-spinners";
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { Container } from "./styles";

const Loader = ({isLoading})=>{
  const { black } = useContext(ThemeContext);
  return (
    <Container isLoading={isLoading}>
      <SyncLoader loading={isLoading} color={black}/>
    </Container>
  )
}

export default Loader;