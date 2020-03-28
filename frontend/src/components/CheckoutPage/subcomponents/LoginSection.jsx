import { useRouter } from "next/router";
import { Section } from "../styles";
import LoginForm from "!/LoginPage";
import LinkedButton from "!/LinkedButton";

const LoginSection = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/checkout/[step]", "/checkout/order", { shallow: true });
  };
  return (
    <Section>
      <LoginForm
        noPadding
        onLogin={handleLogin}
        customRegisterButton={
          <LinkedButton
            shallow
            route="/checkout/[step]"
            as="/checkout/register"
            label="Registrar"
          />
        }
      />
    </Section>
  );
};

export default LoginSection;
