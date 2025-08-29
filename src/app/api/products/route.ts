import products from "@/data/products.json";
import { NextResponse } from "next/server";
import { Product } from "@/types/ProductType";

// Função para manipular a requisição GET
export async function GET() {
  return NextResponse.json(products as Product[]);
}
