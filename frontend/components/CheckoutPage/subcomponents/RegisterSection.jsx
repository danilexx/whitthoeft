import { useRouter } from "next/router";
import LinkedButton from "!/LinkedButton";
import { Section } from "../styles";
import RegisterForm from "!/RegisterPage";

const RegisterSection = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/checkout/[step]", "/checkout/addresses", { shallow: true });
  };
  return (
    <Section>
      <LinkedButton
        style={{ width: 300 }}
        label="Voltar"
        shallow
        route="/checkout/[step]"
        as="/checkout/login"
      />
      <RegisterForm noPadding onRegister={handleRegister} />
    </Section>
  );
};

export default RegisterSection;
