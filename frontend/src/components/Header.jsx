import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: colunm;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 15px 0;
`;
const Label = styled.p`
  font-family: Bitter;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  text-transform: uppercase;
  color: ${props => props.theme.black};
  text-align: center;
  letter-spacing: 0.115em;
  margin: 0;
`;

const Header = ({ label = "", ...props }) => {
  return (
    <Container {...props}>
      <Label>{label}</Label>
    </Container>
  );
};

Header.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Header;
