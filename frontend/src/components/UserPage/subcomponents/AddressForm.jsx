import { Formik } from "formik";
import * as Yup from "yup";
import { useList } from "react-use";
import { RegisterButton } from "!/publicStyles";
import FormField, { MaskedFormField } from "!/FormField";
import masks from "-/utils/masks";
import { addAddress, deleteAddress, getAddresses } from "-/services";
import {
  HiddeableForm,
  Addresses,
  AddressCard,
  Row,
  FloatingContainer,
  DeleteButton,
  CheckButton,
} from "./styles";
import { CustomButton, ButtonsContainer } from "../styles";

Yup.setLocale({
  mixed: {
    required: "Obrigatorio",
  },
  string: {
    // eslint-disable-next-line no-template-curly-in-string
    min: "Não possui mais que ${min} caracteres",
  },
});

const addressSchema = Yup.object({
  street: Yup.string()
    .required()
    .min(6),
  city: Yup.string()
    .required()
    .min(6),
  district: Yup.string()
    .required()
    .min(6),
  number: Yup.number().required(),
  complement: Yup.string()
    .required()
    .min(6),
  state: Yup.string()
    .required()
    .min(2),
  cep: Yup.string().required(),
});

const AddressForm = ({ onChange, currentAddress }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  // const token = useSelector(state => state.user.token, shallowEqual);
  const [addresses, { push, removeAt, set }] = useList([]);
  const [isFormHidden, setIsFormHidden] = React.useState(true);
  React.useEffect(() => {
    const fn = async () => {
      const { data: newAddresses } = await getAddresses();
      set(newAddresses);
    };
    fn();
  }, []);
  const pushAddress = async address => {
    const { data: newAddress } = await addAddress(address);
    push(newAddress);
  };
  const handleClick = e => {
    if (onChange) onChange(e);
  };

  const removeAddress = async (id, index) => {
    await deleteAddress(id);
    removeAt(index);
  };

  const handleSubmit = async values => {
    await pushAddress(values);
    setIsLoading(false);
    setIsFormHidden(true);
  };
  return (
    <>
      <ButtonsContainer>
        {isFormHidden || (
          <CustomButton
            label="Fechar"
            red
            onClick={() => setIsFormHidden(true)}
          />
        )}
      </ButtonsContainer>
      <Formik
        initialValues={{
          cep: "",
          street: "",
          district: "",
          city: "",
          state: "",
          number: "",
          complement: "",
        }}
        validationSchema={addressSchema}
        onSubmit={handleSubmit}
      >
        <HiddeableForm isHidden={isFormHidden} id="form3">
          <MaskedFormField
            mask={masks.cep}
            id="cep"
            label="CEP"
            name="cep"
            type="text"
          />
          <FormField
            placeholder="Rua"
            id="street"
            label="Rua"
            name="street"
            type="text"
          />
          <FormField
            placeholder="Bairro"
            id="district"
            label="Bairro"
            name="district"
            type="text"
          />
          <FormField
            placeholder="Cidade"
            id="city"
            label="Cidade"
            name="city"
            type="text"
          />
          <FormField
            placeholder="Estado"
            id="state"
            label="Estado"
            name="state"
            type="text"
          />
          <FormField
            placeholder="Numero"
            id="number"
            label="Numero"
            name="number"
            type="number"
          />
          <FormField
            placeholder="Complemento"
            id="complement"
            label="Complemento"
            name="complement"
            type="text"
          />
          <RegisterButton
            onClick={() => {
              setIsLoading(true);
            }}
            isLoading={isLoading}
            type="submit"
            form="form3"
            label="Adiciona Endereço"
            primary
          />
        </HiddeableForm>
      </Formik>
      <ButtonsContainer>
        {isFormHidden && (
          <CustomButton
            label="Adicionar Novo Endereço"
            primary
            onClick={() => setIsFormHidden(false)}
          />
        )}
      </ButtonsContainer>
      <Addresses>
        {Array.isArray(addresses) &&
          addresses.map((e, index) => (
            <AddressCard
              hoverable={typeof onChange === "function"}
              onClick={() => handleClick(e)}
              key={index}
            >
              <CheckButton
                active={currentAddress && currentAddress.id === e.id}
              />
              <Row>{e.street}</Row>
              <Row>{e.city}</Row>
              <Row>{e.district}</Row>
              <Row>{e.state}</Row>
              <Row>{e.cep}</Row>
              <Row>{e.number}</Row>
              <Row>{e.complement}</Row>
              <FloatingContainer>
                <DeleteButton onClick={() => removeAddress(e.id, index)} />
              </FloatingContainer>
            </AddressCard>
          ))}
      </Addresses>
    </>
  );
};

export default AddressForm;
