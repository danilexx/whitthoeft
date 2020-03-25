import PropTypes from "prop-types";
import { CheckboxContainer, CheckboxMarker, CheckboxLabel } from "./styles";

const Checkbox = ({ label, initialState, onChange, name, ...props }) => {
  const [isOn, setIsOn] = React.useState(initialState);
  React.useEffect(() => {
    if (onChange) onChange(isOn, name);
  }, [isOn]);
  return (
    <CheckboxContainer onClick={() => setIsOn(state => !state)} {...props}>
      <CheckboxMarker isOn={isOn} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};
Checkbox.defaultProps = {
  initialState: false,
};
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  initialState: PropTypes.bool,
};

export default Checkbox;
