import { response } from 'express';
import mongoose from 'mongoose';
import { mapping } from '../services/BillServices.js';

export async function billHandler(req, res) {
	let result = await mapping(req.body, req.query.agencyCode);
	res.json(result);
}

