const { authUser } = require("../utils");

async function getProfile(parent, args, context, info) {
  const userId = authUser(context);
  const profile = await context.prisma.profile.findUnique({
    where: {
      id: userId,
    },
  });

  if (!profile) {
    throw new Error("Este usuario no tiene un perfil relacionado.");
  }
  console.log(profile);
  return {
    id: "adfDFscdsFDF",
    firstName: "Pepe",
    middleName: null,
    lastName: "Lopez",
    secondName: null,
    age: "24",
  };
}

module.exports = {
  getProfile,
};
