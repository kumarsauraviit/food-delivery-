/**
 * Order status enum
 */
export enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  PREPARING = "PREPARING",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}
/**
 * Full Order database entity
 */
export interface Order {
  id: string;
  cart_id: string;
  user_id: string;
  order_date: Date;
  status: OrderStatus;
  total_amount: number;
  created_at: Date;
  updated_at: Date;
}

/**
 * Data Transfer Object for creating a new order
 */
export interface CreateOrderDTO {
  user_id: string;
  cart_id: string;
  order_date: Date;
  status: OrderStatus;
  total_amount: number;
}
