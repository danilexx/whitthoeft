import { useField, isInputEvent, useFormikContext } from "formik";
import { useCallback } from "react";
import ErrorLabel from "!/ErrorLabel";
import { StyledLabel, Container, StyledDatePicker } from "./styles";

const isEvent = event =>
  event && (event instanceof Event || event.nativeEvent instanceof Event);

const DateField = ({ label, id, noError = false, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(props);
  const onChange = useCallback(
    eventOrValue => {
      if (isEvent(eventOrValue)) {
        field.onChange(eventOrValue);
      } else {
        setFieldValue(field.name, eventOrValue);
      }
    },
    [field.name, field.onChange, setFieldValue]
  );
  const onBlur = useCallback(
    eventOrValue => {
      if (isEvent(eventOrValue)) {
        field.onBlur(eventOrValue);
      } else {
        setFieldTouched(field.name, true);
      }
    },
    [field.name, field.onBlur, setFieldTouched]
  );

  return (
    <Container>
      <StyledLabel htmlFor={id || props.name}>{label}</StyledLabel>
      {/* <StyledField className="text-input" {...field} {...props} /> */}
      <StyledDatePicker
        dayPlaceholder="DD"
        monthPlaceholder="MM"
        yearPlaceholder="AAAA"
        type="date"
        {...props}
        onChange={onChange}
        onBlur={() => onBlur(null)}
        value={field.value}
      />
      {noError === false && (
        <ErrorLabel touched={meta.touched} error={meta.error} />
      )}
    </Container>
  );
};

export default DateField;
