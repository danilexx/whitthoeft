const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();
const withNextEnv = nextEnv();
module.exports = withPlugins([withCSS, withSass, withTM, withNextEnv], {
  transpileModules: ["react-date-picker"],
  resolve: {
    modules: ["sass_loader"],
    cssModules: true,
  },
});
