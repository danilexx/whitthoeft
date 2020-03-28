import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Portal } from "react-portal";
import { useRouter } from "next/router";
import { Section } from "../styles";
import {
  TableHeader,
  Title,
  Row,
  Product,
  Quantity,
  Photo,
  Name,
  Price,
  Container,
  TableElement,
} from "!/CartPage/subcomponents/styles";
import { PaymentCard, StyledCard } from "!/UserPage/subcomponents/styles";
import {
  Column,
  AddressRow,
  TotalPrice,
  Separator,
  SubPrice,
  TableFooter,
} from "./styles";
import later from "-/utils/later";
import { VesgoContainer } from "!/CartPage/styles";
import LinkedButton from "!/LinkedButton";
import Button from "!/Button";
import Popup from "!/Popup";
import {
  ReminderContainer,
  ReminderLabel,
  RegisterButton,
} from "!/publicStyles";
import getRandomNumberBetween from "-/utils/getRandomNumberBetween";
import actions from "-/redux/actions";

const SIZES = {
  PRODUCT_SIZE: 60,
  PRICE_SIZE: 20,
  QTD_SIZE: 20,
};
const FinalSection = ({ payment, address, clear }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [popup, setPopup] = React.useState({ isOn: false });
  const products = useSelector(state => state.cart, shallowEqual);
  const email = useSelector(state => state.user.email, shallowEqual);
  const totalPrice = products
    ? products
        .map(e => e.product.price * e.quantity.toFixed(2))
        .reduce((total = 0, current = 0) => total + Number(current), 0)
        .toFixed(2)
    : 0.0;
  const subPrice = totalPrice;
  // const paymentOptions = [...Array(6)].map(
  //   (_, index) =>
  //     `${index + 1} x de R$ ${(totalPrice / (index + 1))
  //       .toFixed(2)
  //       .replace(".", ",")} sem juros!`
  // );
  const handleBuy = async () => {
    try {
      setIsLoading(true);
      await later(2000, null);
      setIsLoading(false);
      setPopup(rest => ({ ...rest, isOn: true }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleOk = () => {
    router.push("/");
    dispatch(actions.cart.clear());
    clear();
  };
  const pedidoNumber = React.useMemo(
    () => [...Array(6)].map(() => getRandomNumberBetween(0, 9)),
    []
  );
  return (
    <Section>
      <Container>
        <TableHeader>
          <Title size={100}>Resumo do Pedido</Title>
        </TableHeader>
        {products.map(({ product, quantity }) => (
          <Row key={product.id}>
            <Product style={{ cursor: "initial" }} size={SIZES.PRODUCT_SIZE}>
              <Photo src={product.img.url} />
              <Name>{product.name}</Name>
            </Product>
            <Price size={SIZES.PRICE_SIZE}>
              R$ {product.price.toFixed(2).replace(".", ",")}
            </Price>
            <Quantity size={SIZES.QTD_SIZE}>{quantity}x</Quantity>
          </Row>
        ))}
        {payment && (
          <>
            <TableHeader>
              <Title size={100}>Forma de Pagamento</Title>
            </TableHeader>
            <Row>
              <TableElement size={100}>
                {[payment].map(e => (
                  <PaymentCard key={e.id}>
                    <StyledCard
                      cvc="000"
                      name={e.name}
                      number={e.number
                        .split("")
                        .map((letter, index, array) => {
                          if (letter === " ") return letter;
                          if (!isNaN(letter) && index < array.length - 4) {
                            return "•";
                          }
                          return letter;
                        })
                        .join("")}
                      expiry={e.expiry}
                      issuer={e.issuer}
                      preview
                    />
                  </PaymentCard>
                ))}
              </TableElement>
            </Row>
          </>
        )}
        {address && (
          <>
            <TableHeader>
              <Title size={100}>Endereço para Entrega</Title>
            </TableHeader>
            <Row>
              <Column>
                {address && (
                  <>
                    <AddressRow>Rua: {address.street}</AddressRow>
                    <AddressRow>Numero: {address.number}</AddressRow>
                    <AddressRow>Cidade: {address.city}</AddressRow>
                    <AddressRow>Bairro: {address.district}</AddressRow>
                    <AddressRow>Complemento: {address.complement}</AddressRow>
                    <AddressRow>Estado: {address.state}</AddressRow>
                    <AddressRow>Pais: {address.country}</AddressRow>
                    <AddressRow>Cep: {address.cep}</AddressRow>
                  </>
                )}
              </Column>
            </Row>
          </>
        )}
        <TableFooter>
          <SubPrice>SUBTOTAL: R$ {subPrice}</SubPrice>
          <Separator />
          <TotalPrice>TOTAL: R$ {totalPrice}</TotalPrice>
        </TableFooter>
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
            route="/checkout/[step]"
            as="/checkout/payment"
            label="Voltar"
            style={{ width: "33%", margin: "10px 0" }}
          />
          <RegisterButton
            isLoading={isLoading}
            onClick={handleBuy}
            primary
            label="Comprar"
            style={{ width: "33%", margin: "10px 0", flex: "initial" }}
          />
        </VesgoContainer>
      </Container>
      <Portal>
        <Popup
          isOn={popup.isOn}
          title="Compra feita com sucesso!"
          setter={value => setPopup({ ...popup, isOn: value })}
          postFunctions={handleOk}
        >
          <ReminderContainer>
            <ReminderLabel>
              Pedido n°{pedidoNumber}: Realizado com Sucesso!
              <br />
              Acompanhe no Email:
              <br />
              {email}
            </ReminderLabel>
            <Button
              primary
              label="Ok"
              onClick={() => {
                setPopup(props => ({ ...props, isOn: false }));
                handleOk();
              }}
            />
          </ReminderContainer>
        </Popup>
      </Portal>
    </Section>
  );
};

export default FinalSection;
