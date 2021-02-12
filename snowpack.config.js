/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src": {url: "/_dist_"},
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations
    "public": {url: "/", static: true, resolve: false}
  },
  plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-dotenv"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
