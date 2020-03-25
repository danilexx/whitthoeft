import PropTypes from "prop-types";
import {
  FilterSectionTitleContainer,
  CheckboxContainer,
  CheckboxMarker,
  CheckboxLabel,
  FilterContainer,
  CheckboxesContainerRaw,
  CheckboxesInnerContainer,
  SizeSelectorContainer,
  SizeSelectorLabel,
  Marked,
} from "./styles";

export const FilterSectionTitle = ({ label, ...props }) => (
  <FilterSectionTitleContainer {...props}>{label}</FilterSectionTitleContainer>
);
FilterSectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

export const Filter = ({ label, children, ...props }) => (
  <FilterContainer {...props}>
    <FilterSectionTitle label={label} />
    {children}
  </FilterContainer>
);
Filter.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export const CheckboxesContainer = ({ children, ...props }) => (
  <CheckboxesContainerRaw {...props}>
    <CheckboxesInnerContainer>{children}</CheckboxesInnerContainer>
  </CheckboxesContainerRaw>
);
