import PropTypes from "prop-types";
import { ColorSelectorContainer } from "./styles";
import { Marked } from "../publicStyles";
const ColorSelector = ({ color, isMarked, onChange, ...props }) => {
  return (
    <ColorSelectorContainer
      onClick={() => onChange(color)}
      {...props}
      color={color}
    >
      <Marked isMarked={isMarked} />
    </ColorSelectorContainer>
  );
};
ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorSelector;
