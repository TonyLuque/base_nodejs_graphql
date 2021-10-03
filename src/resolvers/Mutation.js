const { signup, login } = require("../users/Mutation");
const { authUser } = require("../utils");

async function saludar(parent, args, context, info) {
  authUser(context);

  return "Oa Julay";
}

module.exports = {
  saludar,
  signup,
  login,
};
