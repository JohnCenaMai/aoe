import express from 'express';
import { MappingHandler } from '../controllers/MappingController.js';

const router = express.Router();

router.post('/login', MappingHandler);

export default router;