import PropTypes from "prop-types";
import { ButtonContainer, ButtonLabel } from "./styles";

const Button = React.forwardRef(
  ({ label, primary, children, noFlex, ...props }, ref) => (
    <ButtonContainer
      type="button"
      primary={primary}
      noFlex={noFlex}
      ref={ref}
      {...props}
    >
      {label && <ButtonLabel>{label}</ButtonLabel>}
      {children && children}
    </ButtonContainer>
  )
);
Button.defaultProps = {
  noFlex: false,
  primary: false,
  label: "",
  children: null,
};
Button.propTypes = {
  noFlex: PropTypes.bool,
  label: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.element,
};

export default Button;
