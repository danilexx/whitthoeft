import LoginPage from "!/LoginPage";
import Title from "!/Title";
import ssrSecretRoute from "-/src/utils/ssrSecretRoute";

const Login = () => {
  return (
    <>
      <Title title="Entrar" />
      <LoginPage />
    </>
  );
};

Login.getInitialProps = ctx => {
  ssrSecretRoute(ctx, "/user", true);
  return {};
};

export default Login;
