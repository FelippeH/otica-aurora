import ProductCarousel from "@/components/layout/ProductCarousel";
import Cover from "@/components/layout/Cover";
import Info from "@/components/layout/Info";
import { Product } from "@/types/ProductType";
import { Stripe } from "stripe";

// Função para buscar produtos da API
async function getProducts(): Promise<Product[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-08-27.basil",
  });

  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const formattedProducts: Product[] = products.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description || "",
      price: (price.unit_amount || 0) / 100,
      image: product.images.length > 0 ? product.images : ["/placeholder.png"],
      currency: price.currency,
      category: product.metadata.category || "uncategorized",
    };
  });
  return formattedProducts;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    // Renderiza os produtos em um layout de grade
    <main className="">
      <Cover />
      <Info />

      <div className="mx-6">
        <p className="md:text-[1.4rem] md:mt-8 md:mb-8 mt-8 text-[1.1rem] font-bold mb-6 text-center">
          APROVEITE ARMAÇÕES COM ATÉ 35% DE DESCONTO
        </p>
        <ProductCarousel products={products} category="glasses" />
        <p className="md:text-[1.4rem] md:mt-8 mt-8 text-[1.1rem] font-bold mb-6 text-center">
          AS MELHORES OPÇÕES EM ÓCULOS SOL
        </p>
        <ProductCarousel products={products} category="sunglasses" />
      </div>
    </main>
  );
}
