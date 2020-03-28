import PropTypes from "prop-types";
import { SizeSelectorContainer, SizeSelectorLabel } from "./styles";
import { Marked } from "../publicStyles";

const SizeSelector = ({ onChange, size, defaultState, isMarked, ...props }) => {
  return (
    <SizeSelectorContainer {...props} onClick={() => onChange(size)}>
      <Marked isMarked={isMarked} />
      <SizeSelectorLabel>{size}</SizeSelectorLabel>
    </SizeSelectorContainer>
  );
};

SizeSelector.defaultProps = {
  defaultState: false,
  onChange: () => {},
  isMarked: false,
};
SizeSelector.propTypes = {
  onChange: PropTypes.func,
  size: PropTypes.string.isRequired,
  defaultState: PropTypes.bool,
  isMarked: PropTypes.bool,
};

export default SizeSelector;
