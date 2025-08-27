import products from "@/data/products.json";
import { NextResponse } from "next/server";
import { Product } from "@/types/products";

export async function GET() {
  return NextResponse.json(products as Product[]);
}
