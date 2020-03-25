import { useField } from "formik";
import MaskedInput from "react-text-mask";
import ErrorLabel from "!/ErrorLabel";
import { StyledLabel, StyledField, Container, StyledTextArea } from "./styles";

const FormField = ({ label, id, noError = false, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <Container>
      <StyledLabel htmlFor={id || props.name}>{label}</StyledLabel>
      <StyledField className="text-input" {...field} {...props} />
      {noError === false && (
        <ErrorLabel touched={meta.touched} error={meta.error} />
      )}
    </Container>
  );
};

export const FormTextArea = ({ label, id, noError = false, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <Container>
      <StyledLabel htmlFor={id || props.name}>{label}</StyledLabel>
      <StyledTextArea className="text-input" {...field} {...props} />
      {noError === false && (
        <ErrorLabel touched={meta.touched} error={meta.error} />
      )}
    </Container>
  );
};

export const MaskedFormField = ({
  label,
  id,
  noError = false,
  mask,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <Container>
      <StyledLabel htmlFor={id || props.name}>{label}</StyledLabel>
      <MaskedInput
        mask={mask}
        showMask
        {...field}
        {...props}
        render={(ref, props) => (
          <StyledField ref={input => ref(input)} {...props} />
        )}
      />
      {noError === false && (
        <ErrorLabel touched={meta.touched} error={meta.error} />
      )}
    </Container>
  );
};

export default FormField;
