import Router from "next/router";

const authRequest = async ({ fn, res, alternative }) => {
  let response;
  try {
    response = await fn();
  } catch (error) {
    if (alternative) {
      return alternative(error);
    }
    if (typeof window === "undefined") {
      res.writeHead(302, {
        Location: "/unauthorized",
      });
      res.end();
      // res.redirect("/unauthorized");
    } else {
      Router.push("/unauthorized");
    }
  }
  return response;
};

export default authRequest;
