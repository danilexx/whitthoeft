import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import Router from "next/router";
import Popup from "!/Popup";
import Button from "!/Button";
import isUpperCase from "-/utils/isUpperCase";
import {
  CustomHeader,
  Container,
  StyledForm,
  RegisterButton,
} from "../publicStyles";
import { ReminderContainer, ReminderLabel } from "./styles";
import FormField from "../FormField";
import { loginUser } from "-/services";
import isLowerCase from "-/utils/isLowerCase";
import getErrorMessage from "-/utils/getErrorMessage";
import actions from "-/redux/actions";
import LinkedButton from "../LinkedButton";

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref);
    },
  });
}
Yup.addMethod(Yup.string, "equalTo", equalTo);
const LoginForm = ({ onLogin, customRegisterButton, noPadding = false }) => {
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
    if (onLogin) {
      onLogin();
    } else {
      Router.push("/");
    }
  }

  return (
    <Container noPadding={noPadding}>
      <CustomHeader label="Login" />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(6, "Não possui mais que 6 caracteres")
            .max(100, "Possui mais do que 100 caracteres")
            .required("Obrigatorio")
            .test(
              "hasUpperCase",
              "Deve haver ao menos 1 letra maiuscula",
              value => value && value.split("").some(e => isUpperCase(e))
            )
            .test(
              "hasLowerCase",
              "Deve haver ao menos 1 letra minuscula",
              value => value && value.split("").some(e => isLowerCase(e))
            )
            .test(
              "hasNumber",
              "Deve haver ao menos 1 numero",
              value => value && value.split("").some(e => !isNaN(e))
            ),
          // .matches(
          //   /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          //   "Deve haver ao menos 1 caractere especial"
          // ),
          email: Yup.string()
            .email("Email invalido")
            .required("Obrigatorio"),
        })}
        onSubmit={async values => {
          try {
            setIsLoading(true);
            const response = await loginUser(values);
            const { token } = response.data;
            if (!token) throw Error("Erro inesperado");
            const decodedToken = jwtDecode(token);
            const userEmail = decodedToken.email;
            dispatch(actions.user.login(token));

            // const { data } = await fetchUserData(token);
            console.log(decodedToken);
            if (!decodedToken.role === "Guest") {
              setPopupState(rest => ({
                ...rest,
                title: "Confirmação de Email",
                message: `Se lembre de confirmar sua conta no seguinte email ${userEmail}`,
                isOn: true,
                action: handleOk,
              }));
            } else {
              handleOk();
            }
          } catch (error) {
            const errMsg = error.response ? error.response.data : error.message;
            setIsLoading(false);
            setPopupState(rest => ({
              ...rest,
              action: () => {
                setPopupState(state => ({ ...state, isOn: false }));
              },
              title: "Erro ao Logar",
              message: getErrorMessage(errMsg),
              isOn: true,
            }));
          }
        }}
      >
        <StyledForm id="form">
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <FormField
            label="Senha"
            name="password"
            type="password"
            placeholder="Senha"
          />
          <RegisterButton
            isLoading={isLoading}
            type="submit"
            form="form"
            label="Entrar"
            primary
          />
          {customRegisterButton ? (
            customRegisterButton
          ) : (
            <LinkedButton route="/register" label="Cadastrar" />
          )}
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

export default LoginForm;
