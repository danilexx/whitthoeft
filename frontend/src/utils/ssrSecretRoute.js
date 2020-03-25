import cookies from "next-cookies";

const ssrSecretRoute = (ctx, route, secretToLogged = false) => {
  const { res } = ctx;
  if (!res) return;
  const { token } = cookies(ctx);
  if (secretToLogged && token) {
    res.writeHead &&
      res.writeHead(302, {
        Location: route,
      });
    res.end();
  } else if (!token && !secretToLogged) {
    res.writeHead &&
      res.writeHead(302, {
        Location: route,
      });
    res.end();
  }
};

export default ssrSecretRoute;
