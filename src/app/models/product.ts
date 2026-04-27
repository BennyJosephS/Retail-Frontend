export interface Product {
  productId: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryName: string;
  stockQuantity: number;
  isAvailable: boolean;
}