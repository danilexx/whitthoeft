import { Info, Title, BadgeContainer, Icon, Label, Container } from "./styles";

const BadgeInfo = [
  {
    id: 0,
    title: "Frete Grátis",
    iconUrl: "/badges/frete.svg",
    label: "em compras acima de r$ 190 ",
  },
  {
    id: 1,
    title: "Pague sem juros!",
    iconUrl: "/badges/sem-juros.svg",
    label: "compre parcelado no cartão de credito",
  },
  {
    id: 2,
    title: "Troca Gratuita",
    iconUrl: "/badges/troca.svg",
    label: "na sua primeira compra",
  },
  {
    id: 3,
    title: "Compra Segura",
    iconUrl: "/badges/seguranca.svg",
    label: "ambiente protegido por ssl",
  },
];

const Badges = () => {
  return (
    <Container>
      {BadgeInfo.map(({ title, iconUrl, label, id }) => (
        <Badge title={title} iconUrl={iconUrl} label={label} key={id} />
      ))}
    </Container>
  );
};

const Badge = ({ title, iconUrl, label }) => {
  return (
    <BadgeContainer>
      <Icon src={iconUrl} />
      <Info>
        <Title>{title}</Title>
        <Label>{label}</Label>
      </Info>
    </BadgeContainer>
  );
};

export default Badges;
