export const formatPrice = (price: number | null) => {
  if (!price) return "R$ 2000,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
