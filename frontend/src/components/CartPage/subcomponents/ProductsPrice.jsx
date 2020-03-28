import { TallRow, Text, RowButton, RowElement, RowField } from "./styles";
// import { TableContainer } from "../styles";

const ProductsPrice = ({ totalPrice }) => {
  return (
    <TallRow>
      {/* <RowElement size={60}>
        <Text>Cupom</Text>
        <RowField placeholder="Cupom" />
        <RowButton primary label="Aplicar" />
      </RowElement> */}
      <RowElement
        size={100}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Preço Total: R$ {totalPrice}
      </RowElement>
    </TallRow>
  );
};

export default ProductsPrice;
