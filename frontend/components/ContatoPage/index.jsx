import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import Popup from "!/Popup";
import LoadingButton from "!/LoadingButton";
import Button from "!/Button";
import isUpperCase from "-/src/utils/isUpperCase";
import {
  CustomHeader,
  Container,
  StyledForm,
  RegisterButton,
} from "../publicStyles";
import { ReminderContainer, ReminderLabel } from "!/LoginPage/styles";
import FormField, { FormTextArea } from "../FormField";
import getErrorMessage from "-/src/utils/getErrorMessage";
import later from "-/src/utils/later";

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "${path} must be the same as ${reference}",
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref);
    },
  });
}
Yup.addMethod(Yup.string, "equalTo", equalTo);
const ContatoPage = () => {
  const [popupState, setPopupState] = React.useState({
    action: () => {},
    message: "",
    isOn: false,
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  function handleOk() {
    setPopupState(rest => ({ ...rest, isOn: false }));
    setIsLoading(false);
  }

  return (
    <Container noPadding>
      <CustomHeader label="Contato" />
      <Formik
        initialValues={{
          email: "",
          name: "",
          subject: "",
          message: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email invalido")
            .required("Obrigatorio"),
          name: Yup.string()
            .min(4, "Minimo de 4 Caracteres")
            .required("Obrigatorio"),
          subject: Yup.string()
            .min(4, "Minimo de 4 Caracteres")
            .max(50, "Limite de 50 Caracteres Excedido")
            .required("Obrigatorio"),
          message: Yup.string()
            .min(4, "Minimo de 4 Caracteres")
            .max(200, "Limite de 200 Caracteres Excedido")
            .required("Obrigatorio"),
        })}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsLoading(true);
            await later(1000, null);
            setPopupState(rest => ({
              ...rest,
              action: () => {
                setPopupState({ ...rest, isOn: false });
                handleOk();
                resetForm();
              },
              title: "Sucesso",
              message: "Mensagem enviada com sucesso",
              isOn: true,
            }));
          } catch (error) {
            const errMsg = error.response ? error.response.data : error.message;
            setIsLoading(false);
            setPopupState(rest => ({
              ...rest,
              action: () => {
                setPopupState({ ...rest, isOn: false });
              },
              title: "Erro ao Mandar Mensagem",
              message: getErrorMessage(errMsg),
              isOn: true,
            }));
          }
        }}
      >
        <StyledForm id="form">
          <FormField label="Nome" name="name" type="text" placeholder="Nome" />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <FormField
            label="Assunto"
            name="subject"
            type="text"
            placeholder="Assunto"
          />

          <FormTextArea
            label="Mensagem"
            name="message"
            placeholder="Mensagem"
          />

          <RegisterButton
            isLoading={isLoading}
            type="submit"
            form="form"
            label="Enviar"
            primary
          />
        </StyledForm>
      </Formik>
      <Popup
        title={popupState.title}
        postSetter={popupState.action}
        isOn={popupState.isOn}
        setter={value => setPopupState(rest => ({ ...rest, isOn: value }))}
      >
        <ReminderContainer>
          <ReminderLabel>{popupState.message}</ReminderLabel>
          <Button
            onClick={popupState.action}
            primary
            style={{ width: 150, height: 50 }}
            label="OK"
          />
        </ReminderContainer>
      </Popup>
    </Container>
  );
};

export default ContatoPage;
