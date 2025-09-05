export interface Product {
  id: string;
  price: number | null;
  name: string;
  quantity?: number | 1;
  image: string[];
  description: string | null;
  currency: string;
  category?: string;
}
