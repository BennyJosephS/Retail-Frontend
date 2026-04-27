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

export interface CreateProduct {
  categoryId: number;
  brandId?: number;
  name: string;
  description?: string;
  price: number;
  packagingInfo?: string;
  initialStock: number;
  imageUrl?: string;
}