import {
  orderRepository,
  type CreateOrderDTO,
  type Order,
} from "@project/postgres";

export class OrderService {
  async addOrder(data: CreateOrderDTO): Promise<Order> {
    const order = await orderRepository.createOrder(data);

    return order;
  }
}

export const orderService = new OrderService();
