import { Section } from "../styles";
import Header from "-/components/Header";
import LinkedButton from "-/components/LinkedButton";
import AddressForm from "-/components/UserPage/subcomponents/AddressForm";

const AddressesSection = ({ onChange, initialAddress }) => {
  const [address, setAddress] = React.useState(initialAddress);
  // const dispatch = useDispatch();
  // const addresses = useSelector(state => state.user.addresses, shallowEqual);
  React.useEffect(() => {
    if (onChange) onChange(address);
  }, [address]);
  return (
    <Section>
      <LinkedButton
        style={{ width: 300 }}
        shallow
        label="Voltar"
        route="/checkout/[step]"
        as="/checkout/order"
      />
      <Header label="Selecione o Local de Entrega" />
      <AddressForm
        currentAddress={address}
        onChange={selectedAddress => {
          if (address && address.id === selectedAddress.id) {
            setAddress(null);
          } else {
            setAddress(selectedAddress);
          }
        }}
      />
      {address && (
        <LinkedButton
          style={{ width: 300 }}
          primary
          shallow
          label="Confirmar"
          route="/checkout/[step]"
          as="/checkout/payment"
        />
      )}
    </Section>
  );
};

export default AddressesSection;
