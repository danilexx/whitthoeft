import React, { useEffect, useContext, useState} from 'react';
import Router from 'next/router';
import { Container, LoaderContainer } from "./styles";
import { SyncLoader } from "react-spinners";
import { ThemeContext } from 'styled-components';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { black } = useContext(ThemeContext);
  const handleRouteChange = url => {
    // console.log('App is changing to: ', url);
    setIsLoading(true);
  };
  const handleRouteComplete = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChange);
    Router.events.on('routeChangeComplete', handleRouteComplete);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
      Router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, []);

  return (
    <Container isLoading={isLoading}>
      <LoaderContainer>
        <SyncLoader size={14} loading={isLoading} color={black}/>
      </LoaderContainer>
    </Container >
  )
};

export const Loader = () => {
  return (
    <Container isLoading>
      <LoaderContainer>
        <SyncLoader size={14} loading={true} color={black}/>
      </LoaderContainer>
    </Container >
  )
}

export default LoadingScreen;