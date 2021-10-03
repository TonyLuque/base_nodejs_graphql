function profile(parent, args, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } }).profile();
}

module.exports = {
  profile,
};
