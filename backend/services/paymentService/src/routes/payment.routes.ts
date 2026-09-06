import { Router } from 'express';
import { paymentController } from '../controllers/payment.controller.js';


const router = Router();
router.post('/createOrder', (req, res, next) => paymentController.createPaymentOrder(req, res, next),);
router.post('/verify', (req, res, next) => paymentController.verifyPayment(req, res, next));
export const paymentRouter = router;
