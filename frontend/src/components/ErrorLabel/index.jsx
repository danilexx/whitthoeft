import { Container } from "./styles";

const ErrorLabel = ({ error, touched }) => {
  if (error && touched) {
    return <Container>{error}</Container>;
  }
  return null;
};

export default ErrorLabel;
