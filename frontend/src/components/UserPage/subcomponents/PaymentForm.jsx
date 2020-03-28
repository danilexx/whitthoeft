import { Formik } from "formik";
import * as Yup from "yup";
import valid from "card-validator";
import { useState } from "react";
import { useList } from "react-use";
import { RegisterButton } from "-/components/publicStyles";
import FormField, { MaskedFormField } from "-/components/FormField";
import masks from "-/utils/masks";
import {
  StyledCard,
  HiddeableForm,
  Payments,
  PaymentCard,
  FloatingContainer,
  DeleteButton,
  CheckButton,
} from "./styles";
import { ButtonsContainer } from "../styles";
import Button from "-/components/Button";
import { getCreditCards, addCreditCard, deleteCreditCard } from "-/services";

const acceptedCards = ["mastercard", "visa", "hipercard"];

const schema = Yup.object({
  cvv: Yup.number()
    .test(
      "isValid",
      "Não é valido",
      value => valid.cvv(String(value), 3).isValid
    )
    .required("Obrigatorio"),
  expiry: Yup.string()
    .test("isValid", "Expirado", value => valid.expirationDate(value).isValid)
    .required("Obrigatorio"),
  name: Yup.string()
    .uppercase()
    .test("HasNoNumbers", "Apenas Letras", value => {
      if (value === undefined || value === null) return false;
      // console.log(value.split("").forEach(e=>console.log(e)));
      return String(value)
        .split("")
        .every(e => {
          if (e === " ") return true;
          const isLetter = isNaN(Number(e));
          return isLetter;
        });
    })
    .required("Obrigatorio"),
  number: Yup.number()
    .test("isValid", "Não é valido", value => valid.number(value).isValid)
    .test("IsCardAccepted", "Este Tipo de Cartão não é aceito", value => {
      const { card } = valid.number(value);
      if (!card) return false;
      if (acceptedCards.some(e => e === card.type)) {
        return true;
      }
      return false;
    })
    .required("Obrigatorio"),
});

const PaymentForm = ({ onChange, currentPayment }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState("");
  const [creditCards, { push, removeAt, set }] = useList([]);
  const [isFormHidden, setIsFormHidden] = useState(true);
  const onFocus = e => {
    setFocus(e.target.name);
  };
  React.useEffect(() => {
    const fn = async () => {
      const { data: newCreditCards } = await getCreditCards();
      set(newCreditCards);
    };
    fn();
  }, []);

  const addPayment = async values => {
    const { card } = valid.number(values.number);
    const { data: newCard } = await addCreditCard({
      ...values,
      issuer: card.type,
    });
    push(newCard);
  };
  const removePayment = (id, index) => {
    deleteCreditCard(id);
    removeAt(index);
  };
  const handleClick = e => {
    if (onChange) onChange(e);
  };
  const handleSubmit = async values => {
    await addPayment(values);
    setIsFormHidden(true);
    setIsLoading(true);
  };
  return (
    <>
      <ButtonsContainer>
        {isFormHidden || (
          <Button label="Fechar" red onClick={() => setIsFormHidden(true)} />
        )}
      </ButtonsContainer>
      <Formik
        initialValues={{
          cvc: "",
          expiry: "",
          name: "",
          number: "",
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {props => (
          <HiddeableForm isHidden={isFormHidden} id="paymentform">
            <StyledCard
              cvc={props.values.cvc}
              expiry={props.values.expiry}
              focused={focus}
              name={props.values.name}
              number={props.values.number}
            />
            <FormField
              placeholder="Numero"
              id="number"
              label="Numero do Cartão"
              name="number"
              type="text"
              onFocus={onFocus}
            />
            <FormField
              placeholder="Nome"
              id="name"
              label="Nome"
              name="name"
              type="text"
              onChange={e => {
                const value = e.target.value
                  .split("")
                  .map(letter => String(letter).toUpperCase())
                  .join("");
                e.target.value = value;
                props.handleChange(e);
              }}
              onFocus={onFocus}
            />
            <MaskedFormField
              mask={masks.expiry}
              id="expiry"
              label="Expiração"
              name="expiry"
              type="text"
              onFocus={onFocus}
            />
            <FormField
              placeholder="CVC / CVV"
              id="cvv"
              label="CVC / CVV"
              name="cvv"
              type="text"
              onFocus={onFocus}
            />
            <RegisterButton
              onClick={() => {
                setIsLoading(true);
              }}
              isLoading={isLoading}
              type="submit"
              form="paymentform"
              label="Adicionar"
              primary
            />
          </HiddeableForm>
        )}
      </Formik>
      <ButtonsContainer>
        {isFormHidden && (
          <Button
            label="Adicionar Forma de Pagamento"
            primary
            onClick={() => setIsFormHidden(false)}
          />
        )}
      </ButtonsContainer>
      <Payments>
        {creditCards.map((e, index) => (
          <PaymentCard
            key={e.id}
            hoverable={typeof onChange === "function"}
            onClick={() => handleClick(e)}
          >
            <StyledCard
              cvc="000"
              name={e.name}
              number={e.number}
              expiry={e.expiry}
              issuer={e.issuer}
              preview
            />
            <FloatingContainer
              style={{ marginRight: 0, transform: "translate(15px, 10px)" }}
            >
              <DeleteButton onClick={() => removePayment(e.id, index)} />
            </FloatingContainer>
            <CheckButton
              active={currentPayment && currentPayment.id === e.id}
              style={{ transform: "translate(30%,10%)" }}
            />
          </PaymentCard>
        ))}
      </Payments>
    </>
  );
};

export default PaymentForm;
