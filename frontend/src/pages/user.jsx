import cookies from "next-cookies";
import UserPage from "!/UserPage";
import { fetchUserData } from "-/src/services";
import ssrSecretRoute from "-/src/utils/ssrSecretRoute";
import Title from "!/Title";

const User = ({ userInfo }) => {
  return (
    <>
      <UserPage userInfo={userInfo} />
      <Title title="Usuario" />
    </>
  );
};

User.getInitialProps = async ctx => {
  const { token } = cookies(ctx);
  ssrSecretRoute(ctx, "/login");
  const { data: userInfo } = await fetchUserData(token);
  return { userInfo };
};

export default User;
