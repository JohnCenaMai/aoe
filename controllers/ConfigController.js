import mongoose from 'mongoose';
import config from '../config/database.js';

export function createConfig(req, res) {
	const config1 = new config({
		_id: mongoose.Types.ObjectId(),
		agency: req.body.agency,
		lifetek: req.body.lifetek,
		cyber: req.body.cyber
	});

	return config1.save()
		.then((data) => {
			return res.status(201).json({
				success: true,
				message: 'New cause created successfully',
				Product: data,
			});
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				success: false,
				message: 'Server error. Please try again.',
				error: error.message,
			});
		});
}
