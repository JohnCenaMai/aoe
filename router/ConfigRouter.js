import express from 'express';
import { createConfig } from '../controllers/ConfigController.js';

const router = express.Router();

router.post('/config', createConfig);

export default router;