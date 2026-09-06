import type { NextFunction, Request, Response } from "express";
// this Request interface need to be extends to attach the orderDTO
import { orderService } from '../services/order.services.js';
export class OrderController {
  async createOrder(req: Request,res:Response,next:NextFunction):Promise<void>{
   const { CreateOrderDTO } = req.body;
   const Order=await orderService.addOrder(CreateOrderDTO);
  }
}
