// import Header from "!/Header";
import {
  Container,
  MiniHeader,
  RegisterField,
  RegisterButton,
  FieldContainer,
} from "./styles";

const OfertRegister = () => (
  <Container>
    {/* <Header label="Oferta por E-mail" /> */}
    <MiniHeader>Receba ofertas exclusivas</MiniHeader>
    <FieldContainer>
      <RegisterField />
      <RegisterButton />
    </FieldContainer>
  </Container>
);

export default OfertRegister;
