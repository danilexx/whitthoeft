import {
  Container,
  SizeSelectorsContainer,
  ColorSelectorsContainer,
  FilterButton,
  FilterTitle,
} from "./styles";
import { Filter, CheckboxesContainer } from "./subcomponents";

import ColorSelector from "!/ColorSelector";
import SizeSelector from "!/SizeSelector";
import Checkbox from "!/Checkbox";
import { sampleColorSelectorList, sampleSizeSelectorList } from "-/samples";

const checkBoxList = [
  {
    id: 0,
    label: "Camisas",
  },
  {
    id: 1,
    label: "Bermudas",
  },
  {
    id: 2,
    label: "Acessorios",
  },
];

const Filters = () => {
  return (
    <Container>
      <FilterTitle>Filtros</FilterTitle>
      <Filter label="filtrar por categoria">
        <CheckboxesContainer>
          {checkBoxList.map(({ id, label }) => (
            <Checkbox key={id} label={label} />
          ))}
        </CheckboxesContainer>
      </Filter>
      <Filter label="filtrar por tamanho">
        <SizeSelectorsContainer>
          {sampleSizeSelectorList.map(({ id, size }) => (
            <SizeSelector key={id} size={size} />
          ))}
        </SizeSelectorsContainer>
      </Filter>
      <Filter label="filtar por cor">
        <ColorSelectorsContainer>
          {sampleColorSelectorList.map(({ id, color }) => (
            <ColorSelector key={id} color={color} />
          ))}
        </ColorSelectorsContainer>
      </Filter>
      <FilterButton primary label="Filtrar" />
    </Container>
  );
};

export default Filters;
