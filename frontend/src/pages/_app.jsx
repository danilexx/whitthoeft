/* eslint-disable react/jsx-props-no-spreading */
import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { withCookies } from "react-cookie";
import LoadingScreen from "!/LoadingScreen";
import createStore from "-/redux/store";
import defaultTheme from "-/theme";
import GlobalStyle from "-/theme/GlobalStyle";
import Nav from "!/Nav";
import Footer from "!/Footer";
import actions from "-/redux/actions";
import "../theme/blank.css";
import "react-credit-cards/es/styles-compiled.css";

class MyApp extends App {
  componentDidMount() {
    const { store, cookies } = this.props;
    const token = cookies.get("token");
    if (token && token !== undefined && token !== null) {
      store.dispatch(actions.user.login(token));
    } else if (store.getState().user.email) {
      store.dispatch(actions.user.leave());
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <PersistGate persistor={store.__PERSISTOR} loading={null}>
            <Nav />
            <Component {...pageProps} />
            <LoadingScreen />
            <Footer />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default withCookies(withRedux(createStore)(withReduxSaga(MyApp)));
