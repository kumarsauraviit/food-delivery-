// services/payment.service.ts

import razorpay from "../config/razorpay.js";
import { type Order } from "@project/postgres";
export class PaymentService {

    async createRazorpayOrder(
        amount: number,
        receipt: string
    ) {

        const options = {
            amount: Math.round(amount * 100),
            currency: "INR",
            receipt,
        };

        const order = await razorpay.orders.create(options);

        return order;
    }
    async  createOrder(
        userId:String,
    ):Promise<Order>{

    }
}

export const paymentService = new PaymentService();