
export type Product = {
  id: string;
  title: string;
  price: string;
  description?: string;
  originalPrice?: string;
  discount?: string | null;
  quantity?: number;
  image?: string[];
}