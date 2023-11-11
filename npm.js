const config = require("./index.js");

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    [
      "@semantic-release/npm",
      {
        pkgRoot: "dist",
      },
    ],
  ],
};
