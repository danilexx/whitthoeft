import cookies from "next-cookies";
import UserPage from "!/UserPage";
import { fetchUserData } from "-/services";
import ssrSecretRoute from "-/utils/ssrSecretRoute";
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
