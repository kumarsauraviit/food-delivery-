import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error.middleware.js';
import { paymentRouter } from './routes/payment.routes.js';

const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'paymentService' });
});

app.use('/api/payment', paymentRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});

export default app;
