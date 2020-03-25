import {
  Container,
  PopupCloseButton,
  PopupContainer,
  Row,
  PopupTitle,
} from "./styles";

const Popup = ({ isOn, setter, postSetter, children, title }) => {
  return (
    <Container isOn={isOn}>
      <PopupContainer isOn={isOn}>
        <Row>
          <PopupTitle>{title}</PopupTitle>
          <PopupCloseButton
            onClick={() => {
              setter && setter(false);
              postSetter();
            }}
         
          />
        </Row>
        {children}
      </PopupContainer>
    </Container>
  );
};

Popup.defaultProps = {
  postSetter: () => {},
};

export default Popup;
