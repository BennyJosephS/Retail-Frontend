export interface PlaceOrder {
  deliveryAddress: string;
  couponCode?: string;
  notes?: string;
}

export interface Order {
  orderId: number;
  orderNumber: string;
  status: string;
  totalAmount: number;
  createdAt: string;
  deliveryAddress: string;
  couponCode?: string;
  notes?: string;
}