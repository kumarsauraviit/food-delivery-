import { Router } from 'express';
import { paymentController } from '../controllers/payment.controller.js';

import { authMiddleware } from "@project/shared-types";// 

const router = Router();
router.post('/createOrder',authMiddleware, (req, res, next) => paymentController.createPaymentOrder(req, res, next),);
router.post('/verify',authMiddleware,(req, res, next) => paymentController.verifyPayment(req, res, next));
export const paymentRouter = router;
