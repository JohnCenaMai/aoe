import express from 'express';
import { billHandler } from '../controllers/BillController.js';

const router = express.Router();

router.post('/origin-bill', billHandler);

export default router;