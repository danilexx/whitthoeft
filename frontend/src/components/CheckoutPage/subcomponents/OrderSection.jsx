import { useSelector, shallowEqual } from "react-redux";
import { Section } from "../styles";
import LinkedButton from "!/LinkedButton";
import {
  Container,
  TableHeader,
  Title,
  Products,
  Product,
  Photo,
  Name,
  Price,
  Quantity,
  Row,
} from "!/CartPage/subcomponents/styles";
import { TableFooter, SubPrice, Separator, TotalPrice } from "./styles";
import { VesgoContainer } from "!/CartPage/styles";

const SIZES = {
  PRODUCT_SIZE: 75,
  PRICE_SIZE: 15,
  QTD_SIZE: 10,
};

const titles = [{ label: "Resumo do Pedido", size: 100 }];

const OrderSection = () => {
  const products = useSelector(state => state.cart, shallowEqual);
  const isLogged = useSelector(
    state => (state.user.email ? true : false),
    shallowEqual
  );
  const totalPrice = products
    ? products
        .map(e => e.product.price * e.quantity.toFixed(2))
        .reduce((total = 0, current = 0) => total + Number(current), 0)
        .toFixed(2)
    : 0.0;
  const subPrice = totalPrice;
  return (
    <Section>
      <Container>
        <TableHeader>
          {titles.map((e, index) => (
            <Title key={index} size={e.size}>
              {e.label}
            </Title>
          ))}
        </TableHeader>
        <Products>
          {products.map(({ product, quantity }) => (
            <Row>
              <Product size={SIZES.PRODUCT_SIZE}>
                <Photo src={product.img.url} />
                <Name>{product.name}</Name>
              </Product>
              <Price size={SIZES.PRICE_SIZE}>
                R$ {product.price.toFixed(2)}
              </Price>
              <Quantity size={SIZES.QTD_SIZE}>{quantity}x</Quantity>
            </Row>
          ))}
        </Products>
        <TableFooter>
          <SubPrice>SUBTOTAL: R$ {subPrice}</SubPrice>
          <Separator />
          <TotalPrice>TOTAL: R$ {totalPrice}</TotalPrice>
        </TableFooter>
      </Container>
      {/* <TableHeader>
        <Title size={100}>Parcelas</Title>
      </TableHeader>
      <Row>
        <CenterContainer>
          <LongSelect options={paymentOptions} />
        </CenterContainer>
      </Row> */}
      <VesgoContainer>
        <LinkedButton
          route="/carrinho"
          label="Voltar"
          style={{ width: "33%", margin: "10px 0" }}
        />
        <LinkedButton
          shallow
          primary
          route="/checkout/[step]"
          as={`/checkout/${isLogged ? "addresses" : "login"}`}
          label="Confirmar"
          style={{ width: "33%", margin: "10px 0" }}
        />
      </VesgoContainer>
    </Section>
  );
};

export default OrderSection;
