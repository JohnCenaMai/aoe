import mongoose from 'mongoose';
import configSchema from './configModel.js';

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/connec';

mongoose.connect(url);

export default mongoose.model('config', configSchema);