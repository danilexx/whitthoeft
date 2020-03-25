import * as Yup from "yup";
import { validate as isCpfValid } from "gerador-validador-cpf";
import { Container } from "./styles";
import {
  Section,
  InfoForm,
  PasswordForm,
  AddressForm,
  PaymentForm,
} from "./subcomponents";
import useSecretRoute from "-/src/utils/useSecretRoute";
import Screens, { Screen } from "!/Screens";
import actions from "-/src/redux/actions";

const myOrdersButtons = [{ label: "Historico" }, { label: "Devoluções" }];
const myAccountButtons = setPageIndex => [
  {
    label: "Informações",
    action: () => {
      setPageIndex(1);
    },
  },
  {
    label: "Modificar Senha",
    action: () => {
      setPageIndex(2);
    },
  },
  {
    label: "Endereços",
    action: () => {
      setPageIndex(3);
    },
  },
  {
    label: "Formas de Pagamento",
    action: () => {
      setPageIndex(4);
    },
  },
  { label: "Favoritos", link: "/favoritos" },
  {
    label: "Sair",
    red: true,
    action: dispatch => {
      dispatch(actions.user.leave());
      // setPageIndex(2);
    },
  },
];
const backButton = setPageIndex => [
  {
    label: "Voltar",
    action: () => {
      setPageIndex(0);
    },
  },
];

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
Yup.addMethod(Yup.string, "isCpfValidNotRequired", (ref, msg) => {
  return Yup.mixed().test({
    name: "isCpfValid",
    exclusive: false,
    message: msg || "Cpf invalido",
    params: {
      reference: ref.path,
    },
    test(value) {
      if (
        value === null ||
        value === undefined ||
        value === "" ||
        value === "___.___.___-__" ||
        isCpfValid(value)
      )
        return true;
      return false;
    },
  });
});

const UserPage = ({ userInfo }) => {
  const [user, setUser] = React.useState(userInfo);
  useSecretRoute();
  return (
    <Container>
      <Screens key="userPageIndex">
        {(pageIndex, setPageIndex) => (
          <>
            <Screen index={0}>
              <Section
                label="Minha Conta"
                buttons={myAccountButtons(setPageIndex)}
              />
              {/* <Section label="Meus Pedidos" buttons={myOrdersButtons} /> */}
            </Screen>
            <Screen index={1}>
              <Section label="Informações" buttons={backButton(setPageIndex)} />
              <InfoForm userInfo={user} setUser={setUser} />
            </Screen>
            <Screen index={2}>
              <Section
                label="Modificar Senha"
                buttons={backButton(setPageIndex)}
              />
              <PasswordForm />
            </Screen>
            <Screen index={3}>
              <Section label="Endereços" buttons={backButton(setPageIndex)} />
              <AddressForm />
            </Screen>
            <Screen index={4}>
              <Section
                label="Formas de Pagamento"
                buttons={backButton(setPageIndex)}
              />
              <PaymentForm />
            </Screen>
          </>
        )}
      </Screens>
    </Container>
  );
};

export default UserPage;
