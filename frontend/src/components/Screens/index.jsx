import { createContext, useContext } from "react";
import { Container, ScreenContainer } from "./styles";
import useLocalStorage from "-/utils/useLocalStorage";

const ScreensContext = createContext(null);
const { Provider } = ScreensContext;
const Screens = ({ children, key = "123" }) => {
  const [pageIndex, setPageIndex] = useLocalStorage(key, 0);
  React.useEffect(() => {
    return () => {
      setPageIndex(0);
    };
  }, []);
  return (
    <Provider value={{ pageIndex, setPageIndex }}>
      <Container>
        {typeof children === "function"
          ? children(pageIndex, setPageIndex)
          : children}
      </Container>
    </Provider>
  );
};

export const Screen = ({ children, index }) => {
  const { pageIndex, setPageIndex } = useContext(ScreensContext);
  return (
    <ScreenContainer index={index} isActive={index === pageIndex}>
      {typeof children === "function"
        ? children(pageIndex, setPageIndex)
        : children}
    </ScreenContainer>
  );
};

export default Screens;
