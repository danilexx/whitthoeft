import { useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

const useSecretRoute = (
  route,
  secretToLoggedUser = false,
  condition = true,
  shallow = false,
  dependencyList = []
) => {
  const Router = useRouter();
  const hasEmail = useSelector(state => state.user, shallowEqual).email
    ? true
    : false;
  const isLoggedIn = secretToLoggedUser ? !hasEmail : hasEmail;
  useEffect(() => {
    if (isLoggedIn === false && condition) {
      if (shallow) {
        Router.push(route.route, route.as, { shallow });
      } else {
        Router.push(route || "/");
      }
    }
  }, [isLoggedIn, ...dependencyList]);
};

export default useSecretRoute;
