import { Formik, Form } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { validate as isCpfValid } from "gerador-validador-cpf";
import isUpperCase from "-/src/utils/isUpperCase";
import {
  CustomHeader,
  Container,
  StyledForm,
  RegisterButton,
  ReminderContainer,
  ReminderLabel,
} from "../publicStyles";
import FormField, { MaskedFormField } from "../FormField";
import { registerUser, loginUser, editUser } from "-/src/services";
import isLowerCase from "-/src/utils/isLowerCase";

import actions from "-/src/redux/actions";
import getErrorMessage from "-/src/utils/getErrorMessage";
import Button from "../Button";
import Popup from "../Popup";
import isOverEighteen from "-/src/utils/isOverEighteen";

import DateField from "../DateField";
import masks from "-/src/utils/masks";

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
const RegisterForm = ({ onRegister, noPadding }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const [popup, setPopup] = React.useState({
    isOn: false,
    message: "",
    title: "",
    action: () => {},
  });

  Yup.addMethod(Yup.string, "isCpfValid", (ref, msg) => {
    return Yup.mixed().test({
      name: "isCpfValid",
      exclusive: false,
      message: msg || "Cpf invalido",
      params: {
        reference: ref.path,
      },
      test(value) {
        return isCpfValid(value);
      },
    });
  });

  return (
    <Container noPadding>
      <CustomHeader label="Cadastrar" />
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          cpf: "",
          tel: "",
          dateOfBirth: "",
          fullName: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .min(4, "Não possui mais que 4 caracteres")
            .required("Obrigatorio"),
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
          // )
          confirmPassword: Yup.string()
            .equalTo(Yup.ref("password"), "As senhas devem ser iguais")
            .required("Obrigatorio"),
          email: Yup.string()
            .email("Email invalido")
            .required("Obrigatorio"),
          fullName: Yup.string()
            .min(4, "Não possui mais que 4 caracteres")
            .required("Obrigatorio"),
          cpf: Yup.string()
            .required("Obrigatorio")
            .test("isCpfValid", "O CPF não é valido", value =>
              isCpfValid(value)
            ),

          tel: Yup.string()
            .min(15, "Telefone invalido")
            .required("Obrigatorio"),
          dateOfBirth: Yup.string()
            .nullable()
            .test("isReq", "Obrigatorio", value => {
              if (
                typeof value !== "string" ||
                value === null ||
                value === undefined
              ) {
                return false;
              }
              return true;
            })
            .test("isAdult", "Não é adulto", value => {
              if (
                typeof value !== "string" ||
                value === null ||
                value === undefined
              ) {
                return false;
              }
              value = new Date(value);
              return isOverEighteen(
                value.getFullYear(),
                value.getMonth(),
                value.getDay()
              );
            }),
        })}
        onSubmit={async values => {
          try {
            setIsLoading(true);
            const response = await registerUser(values);
            const secondResponse = await loginUser(values);
            const { accessToken: token } = secondResponse.data.value;
            const {
              cpf,
              fullName,
              userName,
              tel: phoneNumber,
              email,
              dateOfBirth,
            } = values;
            const editValues = {
              cpf: cpf.replace(/[^\d]+/g, ""),
              fullName,
              userName,
              phoneNumber: phoneNumber.replace(/[^\d]+/g, ""),
              email,
              dateOfBirth: new Date(dateOfBirth).toISOString(),
            };
            const editResponse = await editUser(editValues, token);

            dispatch(actions.user.login(token));
            setIsLoading(false);
            if (onRegister) {
              onRegister();
            } else {
              Router.push("/");
            }
          } catch (error) {
            const errMsg = error.response ? error.response.data : error.message;
            setPopup(rest => ({
              ...rest,
              title: "Erro",
              message: getErrorMessage(errMsg),
              isOn: true,
              action: () => {
                setPopup(state => ({ ...state, isOn: false }));
                setIsLoading(false);
              },
            }));
          }
        }}
      >
        <StyledForm id="form">
          <FormField
            placeholder="Nome Completo"
            id="fullName"
            label="Nome Completo"
            name="fullName"
            type="text"
          />
          <FormField
            label="Usuario"
            name="userName"
            type="text"
            placeholder="Usuario"
          />
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
          <FormField
            label="Confirmar Senha"
            name="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
          />
          <MaskedFormField
            mask={masks.cpf}
            id="cpf"
            label="CPF"
            name="cpf"
            type="text"
          />
          <MaskedFormField
            mask={masks.tel}
            id="tel"
            label="Telefone"
            name="tel"
            type="tel"
          />
          <DateField
            id="dateOfBirth"
            label="Data de Nascimento"
            name="dateOfBirth"
          />
          <RegisterButton
            isLoading={isLoading}
            type="submit"
            form="form"
            label="Cadastrar"
            primary
          />
        </StyledForm>
      </Formik>
      <Popup
        title={popup.title}
        postSetter={popup.action}
        isOn={popup.isOn}
        setter={value => setPopup(rest => ({ ...rest, isOn: value }))}
      >
        <ReminderContainer>
          <ReminderLabel>{popup.message}</ReminderLabel>
          <Button
            onClick={popup.action}
            primary
            style={{ width: 150, height: 50 }}
            label="OK"
          />
        </ReminderContainer>
      </Popup>
    </Container>
  );
};

export default RegisterForm;
