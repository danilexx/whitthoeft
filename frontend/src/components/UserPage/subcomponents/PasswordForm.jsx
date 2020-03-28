import { Formik } from "formik";
import * as Yup from "yup";
import { StyledForm, RegisterButton } from "!/publicStyles";
import FormField from "!/FormField";
import { editUser } from "-/services";

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

const PasswordValidation = Yup.string()
  .min(4, "Não possui mais que 4 caracteres")
  .max(100, "Possui mais do que 100 caracteres")
  .required("Obrigatorio");

const schema = Yup.object().shape({
  password: PasswordValidation,
  newPassword: PasswordValidation,
  confirmNewPassword: PasswordValidation.equalTo(
    Yup.ref("newPassword"),
    "Deve ser igual a 'Nova Senha'"
  ),
});

const PasswordForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async data => {
    setIsLoading(true);
    await editUser(data);
    setIsLoading(false);
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        password: "",
        newPassword: "",
        confirmNewPassword: "",
      }}
      onSubmit={handleSubmit}
    >
      <StyledForm id="passwordForm">
        <FormField
          placeholder="Senha"
          id="password"
          label="Senha"
          name="password"
          type="password"
        />
        <FormField
          placeholder="Nova Senha"
          id="newPassword"
          label="Nova Senha"
          name="newPassword"
          type="password"
        />
        <FormField
          placeholder="Confirmar Nova Senha"
          id="confirmNewPassword"
          label="Confirmar Nova Senha"
          name="confirmNewPassword"
          type="password"
        />
        <RegisterButton
          isLoading={isLoading}
          type="submit"
          form="passwordForm"
          label="Mudar Senha"
          primary
        />
      </StyledForm>
    </Formik>
  );
};

export default PasswordForm;
