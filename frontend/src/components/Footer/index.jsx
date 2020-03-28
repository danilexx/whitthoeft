import {
  Container,
  FooterBadge,
  Row,
  PaymentInfo,
  BadgeContainer,
  PaymentImg,
  PaymentInfoLabel,
  FacebookIcon,
} from "./styles";
import { FooterSection, LabelLink } from "./subcomponents";

const imgs = [
  "/icons/visa.svg",
  "/icons/hipercard.svg",
  "/icons/mastercard.svg",
];

const Footer = () => (
  <Container>
    <BadgeContainer>
      <FooterBadge />
      <PaymentInfo>
        <PaymentInfoLabel>PAGUE COM</PaymentInfoLabel>
        <Row>
          {imgs.map((source, index) => (
            <PaymentImg src={source} key={index} />
          ))}
        </Row>
      </PaymentInfo>
    </BadgeContainer>
    <FooterSection label="Contato">
      <LabelLink route="/contato" label="Quem somos?" />
      <LabelLink route="/contato" label="Fale conosco" />
    </FooterSection>
    <FooterSection label="Categorias">
      <LabelLink route="/produtos/camisetas" label="Camisetas" />
      <LabelLink route="/produtos/bermudas" label="Bermudas" />
      <LabelLink route="/produtos/acessorios" label="Acessorios" />
    </FooterSection> 
    <FooterSection label="Redes Sociais">
      <FacebookIcon />
    </FooterSection>
  </Container>
);

export default Footer;
