
export type Product = {
  _id: string;
  title: string;
  price: string;
  description?: string;
  discount?: string;
  quantity?: number;
  image?: string[];
  discountedPrice?: string;
  rating?: number;
  category?: string;
  stock?: number;
}

export type Filters = {
  category?: string;
}