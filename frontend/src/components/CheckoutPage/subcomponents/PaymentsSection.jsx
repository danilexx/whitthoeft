import { useState } from "react";
import { Section } from "../styles";
import PaymentForm from "!/UserPage/subcomponents/PaymentForm";
import LinkedButton from "!/LinkedButton";
import Header from "!/Header";

const PaymentsSection = ({ onChange, initialPayment = null }) => {
  const [payment, setPayment] = useState(initialPayment);
  React.useEffect(() => {
    if (onChange) onChange(payment);
  }, [payment]);
  return (
    <Section>
      <LinkedButton
        style={{ width: 300 }}
        shallow
        label="Voltar"
        route="/checkout/[step]"
        as="/checkout/addresses"
      />
      <Header label="Selecione uma Forma de Pagamento" />
      <PaymentForm
        currentPayment={payment}
        onChange={selectedPayment => {
          if (payment && payment.id === selectedPayment.id) {
            setPayment(null);
          } else {
            setPayment(selectedPayment);
          }
        }}
      />
      {payment && (
        <LinkedButton
          style={{ width: 300 }}
          primary
          shallow
          label="Confirmar"
          route="/checkout/[step]"
          as="/checkout/final"
        />
      )}
    </Section>
  );
};

export default PaymentsSection;
