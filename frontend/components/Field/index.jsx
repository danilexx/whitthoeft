import PropTypes from "prop-types";
import React from "react";
import { Input } from "./styles";

export const InputTemplate = Input;
const Field = React.forwardRef(({ placeholder, as, ...props }, ref) => {
  return (
    <Input type="text" as={as} ref={ref} placeholder={placeholder} {...props} />
  );
});
Field.defaultProps = {
  placeholder: "",
};
Field.propTypes = {
  placeholder: PropTypes.string,
};

export default Field;
