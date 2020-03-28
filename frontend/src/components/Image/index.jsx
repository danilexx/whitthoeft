import { forwardRef, useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SyncLoader } from "react-spinners";
import { Container, CustomImage } from "./styles";
import { SpinnerContainer } from "../publicStyles";

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const { grey } = useContext(ThemeContext);
  return (
    <Container ref={ref} {...props} className={className}>
      <CustomImage
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
      />
      <SpinnerContainer isLoading={isLoading}>
        <SyncLoader color={grey} loading={isLoading} />
      </SpinnerContainer>
    </Container>
  );
});

export default Image;
