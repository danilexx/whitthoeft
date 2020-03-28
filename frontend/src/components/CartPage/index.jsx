import { useSelector, shallowEqual } from "react-redux";
import { Container, Table, SadMessage, VesgoContainer } from "./styles";
import Header from "../Header";
import { ProductsGrid, CepConsult, ProductsPrice } from "./subcomponents";
import LinkedButton from "../LinkedButton";

const CartPage = () => {
  const products = useSelector(state => state.cart, shallowEqual);
  const totalPrice = products
    ? products
        .map(e => e.product.price * e.quantity)
        .filter(e => Boolean(e))
        .map(e => e.toFixed(2))
        .reduce((total = 0, current = 0) => total + Number(current), 0)
        .toFixed(2)
    : 0.0;
  return (
    <Container>
      <Header label="Carrinho" />
      {products.length > 0 ? (
        <Table>
          <ProductsGrid products={products} />
          {/* <CepConsult /> */}
          <ProductsPrice totalPrice={totalPrice} />
          <VesgoContainer>
            <LinkedButton
              noFlex
              route="/produtos/all"
              label="Voltar as Compras"
              style={{ width: "33%", margin: "10px 0" }}
            />
            <LinkedButton
              noFlex
              primary
              route="/checkout/order"
              label="Finalizar"
              style={{ width: "33%", margin: "10px 0" }}
            />
          </VesgoContainer>
        </Table>
      ) : (
        <SadMessage>
          <p>Você ainda não adicionou produtos ao seu carrinho</p>
          <LinkedButton
            noFlex
            route="/produtos/all"
            label="Voltar as Compras"
          />
        </SadMessage>
      )}
    </Container>
  );
};

export default CartPage;
