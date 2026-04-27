export interface CartItem {
  cartItemId: number;
  productId: number;
  productName: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

export interface Cart {
  cartId: number;
  items: CartItem[];
  subTotal: number;
  discountAmount: number;
  total: number;
}