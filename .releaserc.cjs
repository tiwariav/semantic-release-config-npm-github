const config = require("./index.cjs");

config.plugins[4] = "@semantic-release/npm";
console.log(config);
module.exports = {
  ...config,
};
