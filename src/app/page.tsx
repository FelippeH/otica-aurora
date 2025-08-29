import ProductCarousel from "@/components/layout/ProductCarousel";

// Função para buscar produtos da API
async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Falha ao buscar produtos");

  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    // Renderiza os produtos em um layout de grade
    <main className="">
      <p className="md:text-[1.6rem] md:-mt-6 md:mb-8 -mt-14 text-[1.1rem] font-bold mb-6 text-center">
        APROVEITE ARMAÇÕES COM ATÉ 35% DE DESCONTO
      </p>
      <ProductCarousel products={products} category="glasses" />

      <p className="md:text-[1.6rem] md:mt-20 mt-8 text-[1.1rem] font-bold mb-6 text-center">
        AS MELHORES OPÇÕES EM ÓCULOS SOL
      </p>
      <ProductCarousel products={products} category="sunglass" />
    </main>
  );
}
