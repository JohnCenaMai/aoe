import mongoose from 'mongoose';

var configSchema = mongoose.Schema({
	id: String,
	agency: String,
	lifetek: String,
	cyber: String
});

export default configSchema;