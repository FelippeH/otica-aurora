import ProductCarousel from "@/components/layout/ProductCarousel";

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
    <main className="">
      <ProductCarousel products={products} />
    </main>
  );
}
