import { TallRow, RowElement, Text, RowButton, RowField } from "./styles";

const CepConsult = () => {
  return (
    <TallRow>
      <RowElement size={60}>
        <Text>Calcular Frete</Text>
        <RowField placeholder="Cep" />
        <RowButton primary label="Calcular" />
      </RowElement>
    </TallRow>
  );
};

export default CepConsult;
