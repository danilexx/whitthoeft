import { forwardRef } from "react";
import { Container, Label } from "./styles";

const Message = forwardRef(({ label, ...props }, ref) => {
  return (
    <Container {...props} ref={ref}>
      <Label>{label}</Label>
    </Container>
  );
});

export default Message;
