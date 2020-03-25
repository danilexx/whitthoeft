import { Formik } from "formik";
import * as Yup from "yup";
import masks from "-/src/utils/masks";
import { StyledForm, RegisterButton } from "!/publicStyles";
import FormField, { MaskedFormField } from "!/FormField";
import arrayToObject from "-/src/utils/arrayToObject";
import DateField from "-/components/DateField";
import { editUser } from "-/src/services";
import isOverEighteen from "-/src/utils/isOverEighteen";

Yup.addMethod(Yup.date, "isAdult", (ref, msg) => {
  return Yup.mixed().test({
    name: "isAdult",
    exclusive: false,
    message: msg || "Não adulto",
    test(value) {
      if (typeof value !== "object" || value === null) {
        return true;
      }
      return isOverEighteen(
        value.getFullYear(),
        value.getMonth(),
        value.getDay()
      );
    },
  });
});

const InfoForm = ({ userInfo, setUser }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { email = "", name = "", cpf = "", tel = "", birth } = userInfo;

  return (
    <Formik
      initialValues={{
        email,
        name,
        cpf,
        tel,
        birth: new Date(birth),
      }}
      enableReinitialize
      onSubmit={async values => {
        setIsLoading(true);
        console.log(values);
        // // console.log(values);
        if (values.birth) {
          // eslint-disable-next-line no-param-reassign
          values.birth = values.birth.toISOString();
        }
        // if (values.cpf) {
        //   values.cpf = values.cpf.replace(/[^\d]+/g, "");
        // }
        // if (values.tel) {
        //   // eslint-disable-next-line no-param-reassign
        //   values.phoneNumber = values.tel.replace(/[^\d]+/g, "");
        //   delete values.tel;
        // }
        const validValues = arrayToObject(
          Object.entries(values).filter(([key, value]) => {
            if (value !== "" && value !== null && value !== undefined) {
              return true;
            }
            return false;
          })
        );
        try {
          const { data: newUser } = await editUser(validValues);
          setUser(newUser);
          setIsLoading(false);
        } catch (error) {}
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(4, "Não possui mais que 4 caracteres")
          .notRequired(),
        email: Yup.string()
          .email("Email invalido")
          .notRequired(),
        cpf: Yup.string()
          .isCpfValidNotRequired("O CPF não é valido")
          .notRequired(),
        tel: Yup.string().notRequired(),
        birth: Yup.date().isAdult(),
      })}
    >
      <StyledForm id="InfoForm">
        <FormField
          placeholder="Usuario"
          id="name"
          label="Usuario"
          name="name"
          type="text"
        />
        <FormField
          placeholder="E-mail"
          id="email"
          label="Email"
          name="email"
          type="email"
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
          type="text"
        />
        <DateField id="birth" label="Data de Nascimento" name="birth" />
        <RegisterButton
          isLoading={isLoading}
          type="submit"
          form="InfoForm"
          label="Salvar"
          primary
        />
      </StyledForm>
    </Formik>
  );
};

export default InfoForm;
