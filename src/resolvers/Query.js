const { getProfile } = require("../profiles/Query");

function info(parent, args, context, info) {
  return "Hola Juy!!!";
}

module.exports = {
  info,
  getProfile,
};
