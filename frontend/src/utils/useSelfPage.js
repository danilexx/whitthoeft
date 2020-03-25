import Router, { useRouter } from "next/router";

const useSelfPage = (conditionRoute, replaceRoute) => {
  const Routes = useRouter();
  return () => {
    if (Routes.pathname === conditionRoute && window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      Router.push(replaceRoute);
    }
  };
};

export default useSelfPage;
