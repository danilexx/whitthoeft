import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, ShallowScreenContainer } from "./styles";

const ShallowContext = createContext();

const ShallowScreens = ({ routes = [], children, onChange }) => {
  const [currentScreen, setCurrentScreen] = useState(routes[0]);
  const router = useRouter();
  useEffect(() => {
    setCurrentScreen(router.query.step);
  }, [router, setCurrentScreen]);

  const previousScreen = React.useMemo(() => {
    const index = routes.findIndex(e => e === currentScreen);
    return routes[index - 1];
  }, [routes, currentScreen]);

  useEffect(() => {
    onChange && onChange(routes.findIndex(e => e === currentScreen));
  });
  return (
    <ShallowContext.Provider
      value={{ currentScreen, setCurrentScreen, previousScreen, routes }}
    >
      <Container>{children}</Container>
    </ShallowContext.Provider>
  );
};

export const ShallowScreen = ({ route, children }) => {
  const {
    currentScreen,
    setCurrentScreen,
    previousScreen,
    routes,
  } = useContext(ShallowContext);
  return (
    <ShallowScreenContainer
      isActive={route === currentScreen}
      index={routes.findIndex(e => e === route)}
    >
      {typeof children === "function"
        ? children({ currentScreen, setCurrentScreen, previousScreen })
        : children}
    </ShallowScreenContainer>
  );
};

export default ShallowScreens;
