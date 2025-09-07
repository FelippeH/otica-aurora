export async function getPrisma() {
  const { default: prisma } = await import("@/lib/prisma");
  return prisma;
}
