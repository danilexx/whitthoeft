import { useContext, forwardRef } from "react";
import { ThemeContext } from "styled-components";
import { SyncLoader } from "react-spinners";
import Button from "!/Button";
import { SpinnerContainer } from "../publicStyles";

const LoadingButton = forwardRef(
  ({ isLoading, primary, label, ...props }, ref) => {
    const { white, black } = useContext(ThemeContext);
    return (
      <Button
        label={isLoading ? false : label}
        primary={primary}
        ref={ref}
        {...props}
      >
        <SpinnerContainer isLoading={isLoading}>
          <SyncLoader
            isLoading={isLoading}
            size={10}
            color={primary ? white : black}
          />
        </SpinnerContainer>
      </Button>
    );
  }
);

export default LoadingButton;
