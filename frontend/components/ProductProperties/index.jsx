import { useDispatch } from "react-redux";
import { Portal } from "react-portal";
import ColorSelector from "!/ColorSelector";
import { sampleColorSelectorList, sampleSizeSelectorList } from "-/src/samples";
import {
  Container,
  Breadcumb,
  Title,
  PriceContainer,
  PriceInfo,
  OldPrice,
  Price,
  ParceledPrice,
  ShareIcon,
} from "./styles";
import { PropRow, ShareButton } from "./subcomponents";
import Field from "!/Field";
import Button from "!/Button";
import SizeSelector from "../SizeSelector";
import actions from "-/src/redux/actions";
import ColorChooser from "../ColorChooser";
import SizeChooser from "../SizeChooser";
import { ReminderContainer, ReminderLabel } from "../publicStyles";
import Popup from "../Popup";

const ProductProperties = ({ info }) => {
  const [popup, setPopup] = React.useState(false);
  const [color, setColor] = React.useState();
  const [quantity, setQuantity] = React.useState(1);
  const [size, setSize] = React.useState();
  const {
    name,
    price,
    oldPrice,
    id,
    img: { url: imgUrl },
  } = info;
  const formatedPrice = price.toFixed(2);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(
      actions.cart.add({ id, name, imgUrl, ...info }, size, quantity, color)
    );
    setPopup(true);
  }
  const close = () => setPopup(false);
  return (
    <Container>
      <Breadcumb>Inicio / Camisetas /</Breadcumb>
      <Title>{name}</Title>
      <PriceContainer>
        <PriceInfo>
          {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
          <Price>R$ {formatedPrice}</Price>
          <ParceledPrice>
            até 2x de R${(price / 2).toFixed(2)} sem juros
          </ParceledPrice>
        </PriceInfo>
        <ShareButton />
      </PriceContainer>
      <PropRow label="Selecionar Tamanho">
        <SizeChooser
          sizes={sampleSizeSelectorList}
          onChange={value => setSize(value)}
        />
      </PropRow>
      <PropRow label="Selecionar Cor">
        <ColorChooser
          colors={sampleColorSelectorList}
          onChange={value => setColor(value)}
        />
      </PropRow>
      <PropRow label="Calcular Frete">
        <Field placeholder="CEP" />
        <Button style={{ flex: 1, margin: 10 }} primary label="Calcular" />
      </PropRow>
      <PropRow>
        <Button
          style={{ flex: 3, margin: 10 }}
          onClick={handleClick}
          primary
          label="Adicionar ao Carrinho"
        />
        <Field
          style={{ width: "25px", flex: 1 }}
          onChange={e => setQuantity(e.target.value)}
          onBlur={() => {
            if (quantity < 1) {
              setQuantity(1);
            }
          }}
          type="number"
          min="1"
          step="1"
          max="99"
          value={quantity}
        />
      </PropRow>
      <Portal>
        <Popup title="Sucesso" isOn={popup} setter={close}>
          <ReminderContainer>
            <ReminderLabel>
              Produto Adicionado com Sucesso ao Carinho!
            </ReminderLabel>
            <Button primary label="Ok" onClick={close} />
          </ReminderContainer>
        </Popup>
      </Portal>
    </Container>
  );
};

export default ProductProperties;
